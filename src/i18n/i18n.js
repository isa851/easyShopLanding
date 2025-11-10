import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./locales/ru/ru.json";
import en from "./locales/en/en.json";
import zh from "./locales/zh-hans/zh-hans.json";

const resources = {
  ru: { translation: ru },
  en: { translation: en },
  zh: { translation: zh },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("i18nextLng") || "ru", 
  fallbackLng: "ru",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
});

export default i18n;
