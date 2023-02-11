import { ReactNode, createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import _merge from 'lodash.merge';
import produce from 'immer';

/**
 * Types
 */
export interface ISettings {
  themeMode: 'dark' | 'light' | 'system';
}

type TChangeThemeMode = { type: 'change_theme_mode'; payload: ISettings['themeMode'] };
type TChangeSettings = { type: 'update_settings'; payload: ISettings };

export type TSettingsActions = TChangeThemeMode | TChangeSettings;

type TSettingsDispatch = (action: TSettingsActions) => void;

interface TSettingsProviderProps {
  children: ReactNode;
  configs?: Partial<ISettings>;
}

/**
 * Initializations
 */
export const initialSettings: ISettings = {
  themeMode: 'system',
};

/**
 * Helpers
 */
const SETTINGS_CONTEXT_KEY = 'FXCS_SETTINGS' as const;

const saveSettingsInAsyncStorage = async (settings: ISettings) => {
  try {
    await AsyncStorage.setItem(SETTINGS_CONTEXT_KEY, JSON.stringify(settings));
  } catch (error) {
    console.log('error >> ', error);
  }
};

const loadSettingsFromAsyncStorage = async (): Promise<ISettings> => {
  try {
    const settings = await AsyncStorage.getItem(SETTINGS_CONTEXT_KEY);

    if (settings !== null) {
      return JSON.parse(settings) as ISettings;
    }
  } catch (error) {
    console.log('error >> ', error);
  }

  return initialSettings;
};

/**
 * Context
 */
const SettingsContext = createContext<{ settings: ISettings; dispatch: TSettingsDispatch } | undefined>(undefined);

SettingsContext.displayName = 'SettingsContext';

/**
 * Reducers
 */
const settingsReducer = produce((settings: ISettings, action: TSettingsActions) => {
  switch (action.type) {
    case 'change_theme_mode':
      settings.themeMode = action.payload;

      return settings;

    case 'update_settings':
      return _merge(settings, action.payload);

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
});

const useSettings = () => {
  const context = useContext(SettingsContext);

  if (context === undefined) {
    throw new Error('useSettingsReducer must be used within a SettingsContext');
  }

  return context;
};

/**
 * Provider
 */
const SettingsProvider = (props: TSettingsProviderProps) => {
  const { children, configs = initialSettings } = props;

  const mergedSettingsConfig = useMemo(() => _merge(initialSettings, configs), [configs]);
  const [settings, dispatch] = useReducer(settingsReducer, mergedSettingsConfig);

  const value = useMemo(() => ({ dispatch, settings }), [settings, dispatch]);

  /**
   * Side effects
   */
  useEffect(() => {
    loadSettingsFromAsyncStorage()
      .then((settings) =>
        dispatch({
          payload: settings,
          type: 'update_settings',
        }),
      )
      .catch((error) => console.log('error >> ', error));
  }, []);

  useEffect(() => {
    saveSettingsInAsyncStorage(settings);
  }, [settings]);

  /**
   * Render
   */
  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

export { SettingsProvider, useSettings };
