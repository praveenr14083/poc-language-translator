"use client";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function AboutPage() {
  const { language } = useContext(LanguageContext);

  if (!language) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{language.about.title}</h1>
      <p className="my-2">{language.about.description}</p>
    </div>
  );
}
