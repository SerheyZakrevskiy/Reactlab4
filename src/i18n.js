import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact",
        title: "Estate",
        location: "Kozelets, Kozelets' district, Chernihiv region",
        gps: "Show on map. GPS (the building): N 50°9008197', E 31°1255031\"",
        description:
          "A relic that has survived in Ukraine (if it has survived at all) is a wooden manor house of the baroque period, dating back to the 18th century.",
        aboutBuilding: "About the building",
        article:
          "In my article 'Life as a Miracle' (International Tourism, 2005), I wrote about this estate and the famous town of Kozelets.",
      },
    },
    uk: {
      translation: {
        home: "Головна",
        about: "Про нас",
        services: "Послуги",
        contact: "Контакти",
        title: "Садиба",
        location: "Козелець, Козелецький район, Чернігівська область",
        gps: "Показати на карті. GPS (будівля): N 50°9008197', E 31°1255031\"",
        description:
          "Релікт, який в Україні зберігся одиничні (якщо зберігся взагалі) - лам'янка дерев'яної садибної архітектури періоду бароко, дійшла до нас з XVIII ст.",
        aboutBuilding: "Про будівлю",
        article:
          "Про цю садибу я писала у своїй статті 'Життя як диво' ('Міжнародний туризм', 2005, №6(66), с.92-96) про славнозвісне містечко Козелець.",
      },
    },
  },
  lng: "uk",
  fallbackLng: "uk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
