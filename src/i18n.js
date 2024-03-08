
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import ar from './locales/ar.json'
import en from './locales/en.json'
const resources = {
    en: {
        translation: en
    },
    ar: {
        translation: ar
    }
};

const initialLanguage = "ar"

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: initialLanguage,
        fallback: 'en',
        debug:true,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;