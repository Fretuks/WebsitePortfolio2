export const metadata = {title: "Contact"};
export default function ContactPage() {
    return (
        <div className="shell contact-layout">
            <section>
                <p className="eyebrow">Contact</p>
                <h1 className="contact-big">Let’s make<br/>something<br/>good.</h1>
                <a className="contact-email" href="mailto:fretux@fretux.ch">fretux@fretux.ch ↗</a>
            </section>
            <aside className="contact-card">
                <h2>Details</h2>
                <div className="contact-row"><span>Name</span><strong>Frederik Spirgi</strong></div>
                <div className="contact-row"><span>Based in</span><strong>Switzerland</strong></div>
                <div className="contact-row"><span>Email</span><a href="mailto:fretux@fretux.ch">fretux@fretux.ch</a></div>
                <div className="contact-row"><span>Elsewhere</span><a href="https://github.com/Fretuks" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
            </aside>
        </div>
    );
}
