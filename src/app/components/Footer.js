export default function Footer() {
    return (
        <footer className="footer">
            <div className="shell footer-inner">
                <p>© {new Date().getFullYear()} Frederik Spirgi</p>
                <p>Designed & built in Switzerland</p>
            </div>
        </footer>
    );
}
