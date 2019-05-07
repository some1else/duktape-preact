import i18n from "i18next"
// import Backend from "i18next-xhr-backend"
// import LanguageDetector from "i18next-browser-languagedetector"
// import { reactI18nextModule } from "react-i18next-with-context"

const resources = {
  en: {
    translation: {
      events: "Events",
      description_part1: "Welcome to the welcom",
    },
  },
  de: {
    translation: {
      events: "Der Eventzst",
      description_part1: "Bite starten mit bitte.",
    },
  },
}

let trans

i18n
  // .use(Backend)
  // .use(LanguageDetector)
  // .use(reactI18nextModule)
  .init(
    {
      resources,
      lng: "en",
      // fallbackLng: "en",
      // load: "languageOnly",
      // ns: ["common"],
      // defaultNS: "common",
      debug: true,

      // interpolation: {
      //   escapeValue: false, // not needed for react!!
      // },

      // react: {
      //   defaultTransParent: "span", // needed for preact
      //   wait: true,
      //   nsMode: "default",
      // },
    },
    trans => {
      trans = trans
    },
  )

export const translate = term => i18n.t(term)
export default i18n
