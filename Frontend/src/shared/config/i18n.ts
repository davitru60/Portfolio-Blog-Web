// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./translations/en.json";
import esTranslation from "./translations/es.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: "es", // Idioma por defecto
    fallbackLng: "es", // Idioma de respaldo
    interpolation: {
      escapeValue: false, // React ya se encarga de la seguridad de inyección de HTML
    },
  });

export default i18n;
