"use client";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function ContactPage() {
  const { language } = useContext(LanguageContext);

  if (!language) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{language.contact.title}</h1>
      <p>{language.contact.description}</p>
      <p>Email: {language.contact.email}</p>
      <p>Phone: {language.contact.phone}</p>
    </div>
  );
}
