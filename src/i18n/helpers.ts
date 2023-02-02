import { LanguageDetectorAsyncModule } from 'i18next';
import { NativeModules, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// enUS
import enUSCommon from './locales/enUS/common.json';

// ptPT
import ptPTCommon from './locales/ptPT/common.json';

export const LANGUAGES = {
  EN_US: 'en-US',
  PT_PT: 'pt-PT',
} as const;

export const NAMESPACES = {
  COMMON: 'common',
} as const;

export const PT_PT_RESOURCES = {
  [NAMESPACES.COMMON]: ptPTCommon,
} as const;

export const EN_US_RESOURCES = {
  [NAMESPACES.COMMON]: enUSCommon,
} as const;

export const languages = [LANGUAGES.EN_US, LANGUAGES.PT_PT] as const;
export const namespaces = Object.values(NAMESPACES);
export const defaultNS = NAMESPACES.COMMON;
export const resources = {
  [LANGUAGES.EN_US]: EN_US_RESOURCES,
  [LANGUAGES.PT_PT]: PT_PT_RESOURCES,
} as const;

/**
 * Types
 */
export type TLanguagesKeys = keyof typeof LANGUAGES;
export type TLanguagesValues = (typeof LANGUAGES)[TLanguagesKeys];

/**
 * Functions
 */
/**
 * normalizeKey
 * @param key the key to be normalized and work in `t`
 * @returns the normalized key
 */
export const normalizeKey = (key: string) => key as unknown as TemplateStringsArray;

/**
 * ============================================================
 * React native language detector and save to Async Storage
 * ============================================================
 */

const LANGUAGE_STORE_KEY = 'I18NEXT_LANGUAGE' as const;

export const RNLanguageDetector = (): LanguageDetectorAsyncModule => {
  return {
    async: true,
    cacheUserLanguage: async (language) => {
      try {
        await AsyncStorage.setItem(LANGUAGE_STORE_KEY, language);
      } catch (error) {
        console.error(error);
      }
    },
    detect: async () => {
      let language = LANGUAGES.EN_US as string;

      try {
        const savedLanguage = await AsyncStorage.getItem(LANGUAGE_STORE_KEY);

        if (savedLanguage) {
          language = savedLanguage;
        } else {
          const supportedLanguages = Object.values(LANGUAGES).map((lang) => lang.replace('_', '-'));
          const userLanguage = (
            Platform.OS === 'ios'
              ? NativeModules.SettingsManager.settings.AppleLocale ||
                NativeModules.SettingsManager.settings.AppleLanguages[0]
              : NativeModules.I18nManager.localeIdentifier
          ).replace('_', '-');

          const languageIndexFound = supportedLanguages.indexOf(userLanguage);

          if (languageIndexFound !== -1) {
            language = supportedLanguages[languageIndexFound];
          } else {
            const shortSupportedLanguages = supportedLanguages.map((lang) => lang.slice(0, 2));
            const shortUserLanguage = userLanguage.slice(0, 2);

            const shortLanguageIndexFound = shortSupportedLanguages.indexOf(shortUserLanguage);

            return shortLanguageIndexFound !== -1 ? supportedLanguages[shortLanguageIndexFound] : LANGUAGES.EN_US;
          }
        }

        return language;
      } catch (error) {
        console.log('error >> ', error);
      }

      return language;
    },
    // init: () => {},
    type: 'languageDetector',
  };
};

export default RNLanguageDetector;
