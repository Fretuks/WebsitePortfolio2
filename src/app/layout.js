import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"]});
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"]});

export const metadata = {
    title: {default: "Fretux — Developer & digital maker", template: "%s — Fretux"},
    description: "Portfolio of Frederik Spirgi, a developer building thoughtful digital experiences.",
    icons: {icon: "/favicon.ico"},
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable}`}>
                <Nav/>
                <main className="site-main">{children}</main>
                <Footer/>
            </body>
        </html>
    );
}
