"use client";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="navbar">
            <Link href="/" className="nav-logo">Fretux</Link>
            <div className="nav-links">
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/projects" className="nav-link">Projects</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    );
}