"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ContactPage() {
    useEffect(() => {
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
                <h1>Kontakt & Impressum</h1>

                <article>
                    <h2>Kontakt</h2>
                    <section className="contact-list">
                        <div className="contact-item">
                            <Image
                                className="contact-pic"
                                src="https://avatars.githubusercontent.com/u/143030312?v=4"
                                alt="Frederik Spirgi"
                                width={180}
                                height={180}
                            />
                            <p className="contact-name">Frederik Spirgi</p>
                            <div className="contact-links">
                                <a
                                    className="contact-link"
                                    href="https://github.com/IM23a-spirgif"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ion-icon name="logo-github"></ion-icon>
                                    <span>GitHub</span>
                                </a>
                                <a className="contact-link" href="mailto:Frederik@spirgi.com">
                                    <ion-icon name="mail-outline"></ion-icon>
                                    <span>Email</span>
                                </a>
                                <a className="contact-link" href="tel:+41775337036">
                                    <ion-icon name="call-outline"></ion-icon>
                                    <span>Phone</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </article>
                <article>
                    <h2>Impressum</h2>
                    <section className="impressum">
                        <div className="impressum-item">
                            <strong>Frederik Spirgi</strong><br />
                            Frederik@spirgi.com<br />
                            077 533 70 36
                        </div>
                    </section>
                </article>
            </main>
        </div>
    );
}
