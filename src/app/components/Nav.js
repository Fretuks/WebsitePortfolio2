"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Nav() {
    const pathname = usePathname();
    const links = [["/about", "About"], ["/projects", "Projects"], ["/contact", "Contact"]];
    return (
        <nav className="navbar">
            <Link href="/" className="nav-logo">Fretux<span>.</span></Link>
            <div className="nav-links">
                {links.map(([href, label]) => (
                    <Link key={href} href={href} className={`nav-link ${pathname === href ? "active" : ""}`}>{label}</Link>
                ))}
            </div>
        </nav>
    );
}
