import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./languageContext";
import { translations } from "./translations";

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const savedLang = localStorage.getItem("lang");
    return translations[savedLang] ? savedLang : "en";
  });

  const value = useMemo(() => {
    const toggleLanguage = () => {
      setLang((currentLang) => {
        const nextLang = currentLang === "en" ? "ru" : "en";
        localStorage.setItem("lang", nextLang);
        return nextLang;
      });
    };

    return {
      lang,
      t: translations[lang],
      toggleLanguage,
    };
  }, [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
