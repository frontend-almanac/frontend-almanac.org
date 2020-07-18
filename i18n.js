const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("./next.config").publicRuntimeConfig;

const localeSubpathVariations = {
  none: {},
  foreign: {
    
  },
  all: {
    uk: "uk",
  },
};

module.exports = new NextI18Next({
  otherLanguages: [],
  // localeSubpaths: localeSubpathVariations[localeSubpaths],
  defaultLanguage: "uk",
  // debug: true,
  serverLanguageDetection: false,
  browserLanguageDetection: false,
});
