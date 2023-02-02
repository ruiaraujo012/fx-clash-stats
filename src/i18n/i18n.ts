/* eslint-disable new-cap */
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

import RNLanguageDetector, { LANGUAGES, defaultNS, languages, namespaces, resources } from './helpers';

/**
 * Config
 */
i18next.use(RNLanguageDetector()).use(initReactI18next).init({
  compatibilityJSON: 'v3',
  debug: __DEV__,
  defaultNS,
  fallbackLng: LANGUAGES.EN_US,
  fallbackNS: defaultNS,
  ns: namespaces,
  resources,
});

i18next.languages = languages;

export default i18next;
