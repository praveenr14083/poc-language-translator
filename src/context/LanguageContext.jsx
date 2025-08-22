"use client";
import { createContext, useState, useEffect } from "react";
import { en } from "../data/languages/en";
import { hi } from "../data/languages/hi";
import { ta } from "../data/languages/ta";

export const LanguageContext = createContext({
  language: en,
  changeLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(en);

  useEffect(() => {
    const savedLang =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    if (savedLang) changeLanguage(savedLang);
  }, []);

  const changeLanguage = (lang) => {
    switch (lang) {
      case "hi":
        setLanguage(hi);
        break;
      case "ta":
        setLanguage(ta);
        break;
      default:
        setLanguage(en);
    }
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
