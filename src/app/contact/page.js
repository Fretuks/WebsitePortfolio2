"use client";

import React, {useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
    useEffect(() => {
        // Load Ionicons if not already present
        if (!window.customElements.get("ion-icon")) {
            const script = document.createElement("script");
            script.setAttribute("type", "module");
            script.setAttribute("src", "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js");
            document.head.appendChild(script);

            const noModuleScript = document.createElement("script");
            noModuleScript.setAttribute("nomodule", "");
            noModuleScript.setAttribute("src", "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js");
            document.head.appendChild(noModuleScript);
        }
    }, []);

    return (
        <div className="css_body">
            <main>
                <h1>Kontakt und Impressum</h1>

                <article>
                    <h2>Kontakt</h2>
                    <section className="contact-list">
                        <div className="contact-item">
                            <p className="contact-name">Frederik Spirgi</p>
                            <a className="contact-link" href="https://github.com/IM23a-spirgif" target="_blank"
                               rel="noopener noreferrer">
                                <img className="contact-pic" src="https://avatars.githubusercontent.com/u/143030312?v=4"
                                     alt="Frederik Spirgi"/>
                                <span className="icon">
                  Writer & Developer
                  <br/>
                  <ion-icon name="logo-github"></ion-icon>
                </span>
                            </a>
                        </div>
                    </section>
                </article>

                <article>
                    <h2>Impressum</h2>
                    <section className="impressum">
                        <p className="impressum-item">
                            <strong>Frederik Spirgi</strong><br/>
                            Frederik@spirgi.com<br/>
                            077 533 70 36
                        </p>
                    </section>
                </article>
            </main>
        </div>
    );
}

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;
    const isOpen = sidebar.style.transform === "translateX(0%)";
    sidebar.style.transform = isOpen ? "translateX(-100%)" : "translateX(0%)";
}