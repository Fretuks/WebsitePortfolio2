export default function Footer() {
    return (
        <footer style={{
            padding: "2rem",
            textAlign: "center",
            background: "#1a001a",
            borderTop: "2px solid #3d003d",
            marginTop: "auto"
        }}>
            <p style={{ margin: 0, color: "#ccc" }}>
                © {new Date().getFullYear()} Frederik Spirgi. All rights reserved.
            </p>
        </footer>
    );
}
