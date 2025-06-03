import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "Fretux",
    description: "Frederik Spirgi – Frontend developer",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            background: "linear-gradient(135deg, #000, #1a001a)",
            color: "#fff",
        }}>
        <Nav />
        <main style={{ flex: 1 }}>
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
