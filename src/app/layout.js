"use client";
import { LanguageProvider } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Navbar />
          <main className="p-4">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}
