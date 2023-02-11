import { DarkTheme, DefaultTheme, Theme as ReactNavigationTheme } from '@react-navigation/native';
import { ITheme, createTheme } from './theme';
import { ReactNode, createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { TPaletteMode } from './palette';
import _merge from 'lodash.merge';
import produce from 'immer';

/**
 * Types
 */
type TChangeThemeMode = { type: 'change_theme'; payload: ITheme };

type TThemeActions = TChangeThemeMode;

// TODO: Remove this comment if actions needed
// type TThemeDispatch = (action: TThemeActions) => void;

interface TThemeProviderProps {
  children: ReactNode;
  mode: TPaletteMode;
}

/**
 * Context
 */
const ThemeContext = createContext<
  // TODO: Remove this comment if actions needed
  // { theme: ITheme; reactNavigationTheme: ReactNavigationTheme; dispatch: TThemeDispatch } | undefined
  { theme: ITheme; reactNavigationTheme: ReactNavigationTheme } | undefined
>(undefined);

ThemeContext.displayName = 'ThemeContext';

/**
 * Reducers
 */
const themeReducer = produce((theme: ITheme, action: TThemeActions) => {
  switch (action.type) {
    case 'change_theme':
      _merge(theme, action.payload);

      return theme;

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
});

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useThemeReducer must be used within a ThemeContext');
  }

  return context;
};

/**
 * Provider
 */
const ThemeProvider = (props: TThemeProviderProps) => {
  const { children, mode = 'light' } = props;

  const [theme, dispatch] = useReducer(themeReducer, createTheme(mode));

  useEffect(() => {
    dispatch({
      payload: createTheme(mode),
      type: 'change_theme',
    });
  }, [mode]);

  const reactNavigationTheme = useMemo(() => {
    return _merge(mode === 'light' ? DefaultTheme : DarkTheme, {
      colors: {
        primary: theme.palette.primary.main,
      },
      dark: mode === 'dark',
    } as ReactNavigationTheme);
  }, [mode, theme.palette]);

  // TODO: Remove this comment if dispatch is needed
  // const value = useMemo(() => ({ dispatch, reactNavigationTheme, theme }), [theme, dispatch, reactNavigationTheme]);
  const value = useMemo(() => ({ reactNavigationTheme, theme }), [theme, reactNavigationTheme]);

  /**
   * Render
   */
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, useTheme };
