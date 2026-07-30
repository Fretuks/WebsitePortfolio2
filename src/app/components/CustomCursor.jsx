"use client";

import React, {useEffect, useRef, useState} from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const rafRef = useRef(0);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [active, setActive] = useState(false);
  const [clicking, setClicking] = useState(false);
  const animate = () => {
    const lerp = 0.18;
    currentPos.current.x += (targetPos.current.x - currentPos.current.x) * lerp;
    currentPos.current.y += (targetPos.current.y - currentPos.current.y) * lerp;

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  };
  useEffect(() => {
    const move = (e) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
      setHidden(false);
    };
    const mouseEnter = () => setHidden(false);
    const mouseLeave = () => setHidden(true);
    const mouseDown = () => setClicking(true);
    const mouseUp = () => setClicking(false);
    const updateActive = (e) => {
      const el = e.target;
      const clickable = el.closest?.(
        'a, button, [role="button"], input[type="submit"], input[type="button"], .clickable'
      );
      setActive(Boolean(clickable));
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseenter", mouseEnter, { passive: true });
    window.addEventListener("mouseleave", mouseLeave, { passive: true });
    window.addEventListener("mousedown", mouseDown, { passive: true });
    window.addEventListener("mouseup", mouseUp, { passive: true });
    window.addEventListener("mouseover", updateActive, { passive: true });
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", mouseEnter);
      window.removeEventListener("mouseleave", mouseLeave);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
      window.removeEventListener("mouseover", updateActive);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);
  let className = "custom-cursor";
  if (hidden) className += " custom-cursor--hidden";
  if (active) className += " custom-cursor--active";
  if (clicking) className += " custom-cursor--click";
  return (
    <div aria-hidden="true" ref={cursorRef} className={className}>
      <span className="custom-cursor__ring" />
      <span className="custom-cursor__dot" />
    </div>
  );
}