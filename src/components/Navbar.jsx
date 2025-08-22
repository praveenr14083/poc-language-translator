"use client";
import { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../context/LanguageContext";
import Link from "next/link";

export default function Navbar() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const savedLang =
      typeof window !== "undefined" ? localStorage.getItem("lang") : "en";
    setLang(savedLang);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setLang(value);
    changeLanguage(value);
  };

  return (
    <nav className="p-4 flex justify-between bg-blue-500">
      <div className="flex gap-4">
        <Link href="/">{language.navbar.home}</Link>
        <Link href="/about">{language.navbar.about}</Link>
        <Link href="/contact">{language.navbar.contact}</Link>
      </div>
      <select
        value={lang}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="ta">Tamil</option>
      </select>
    </nav>
  );
}
