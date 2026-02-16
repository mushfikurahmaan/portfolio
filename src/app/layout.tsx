import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mushfikur Rahman",
  description: "Mushfikur Rahman - Get in touch via email or WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="site-nav">
            <Link href="/">home</Link>
            <Link href="/blog">blog</Link>
            <Link href="/collection">collection</Link>
          </nav>
        </header>
        <main className="main-content">{children}</main>
      </body>
    </html>
  );
}
