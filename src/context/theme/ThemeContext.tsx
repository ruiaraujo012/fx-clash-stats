import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import { createTheme } from './theme';
import _merge from 'lodash.merge';
import produce from 'immer';
import type { ITheme} from './theme';
import type { ReactNode} from 'react';
import type { TPaletteMode } from './palette';

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
  // { theme: ITheme;  dispatch: TThemeDispatch } | undefined
  { theme: ITheme } | undefined
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

  // TODO: Remove this comment if dispatch is needed
  // const value = useMemo(() => ({ dispatch, theme }), [theme, dispatch, reactNavigationTheme]);
  const value = useMemo(() => ({ theme }), [theme]);

  /**
   * Render
   */
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider, useTheme };
