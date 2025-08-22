"use client";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function HomePage() {
  const { language } = useContext(LanguageContext);

  if (!language) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{language.home.hero.title}</h1>
      <p className="my-2">{language.home.hero.subtitle}</p>
      <ul className="list-disc pl-6">
        {language.home.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
