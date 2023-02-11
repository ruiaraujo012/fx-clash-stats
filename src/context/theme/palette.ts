import { DarkTheme, DefaultTheme, Theme as ReactNavigationTheme } from '@react-navigation/native';
import _merge from 'lodash.merge';

export type TPaletteMode = 'dark' | 'light';

export interface ICommonColors {
  black: string;
  white: string;
}

export interface IPaletteColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export interface IPaletteText {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface IPaletteAction {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  selectedOpacity: number;
  disabled: string;
  disabledOpacity: number;
  disabledBackground: string;
  focus: string;
  focusOpacity: number;
  activatedOpacity: number;
}

export interface IPaletteBackground {
  default: string;
  paper: string;
}

export interface IPalette {
  common: ICommonColors;
  mode: TPaletteMode;
  primary: IPaletteColor;
  secondary: IPaletteColor;
  error: IPaletteColor;
  warning: IPaletteColor;
  info: IPaletteColor;
  success: IPaletteColor;
  text: IPaletteText;
  divider: string;
  action: IPaletteAction;
  background: IPaletteBackground;
}

export type TColor = keyof IPalette;
export type TPaletteColor = keyof Pick<IPalette, 'error' | 'info' | 'primary' | 'secondary' | 'success' | 'warning'>;

export const defaultLightPalette: IPalette = {
  action: {
    activatedOpacity: 0.12,
    active: 'rgba(0,0,0,0.54)',
    disabled: 'rgba(0,0,0,0.26)',
    disabledBackground: 'rgba(0,0,0,0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0,0,0,0.12)',
    focusOpacity: 0.12,
    hover: 'rgba(0,0,0,0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0,0,0,0.08)',
    selectedOpacity: 0.08,
  },
  background: {
    default: '#f5f5f5',
    paper: '#e5e5e5',
  },
  common: {
    black: '#171717',
    white: '#fafafa',
  },
  divider: 'rgba(0,0,0,0.12)',
  error: {
    contrastText: '#fff',
    dark: '#9f1239',
    light: '#fb7185',
    main: '#e11d48',
  },
  info: {
    contrastText: '#000',
    dark: '#075985',
    light: '#38bdf8',
    main: '#0284c7',
  },
  mode: 'light',
  primary: {
    contrastText: '#fff',
    dark: '#991b1b',
    light: '#f87171',
    main: '#dc2626',
  },
  secondary: {
    contrastText: '#fff',
    dark: '#27272a',
    light: '#a1a1aa',
    main: '#52525b',
  },
  success: {
    contrastText: '#000',
    dark: '#166534',
    light: '#4ade80',
    main: '#16a34a',
  },
  text: {
    disabled: 'rgba(23,23,23,0.87)',
    primary: '#171717',
    secondary: '#525252',
  },
  warning: {
    contrastText: '#000',
    dark: '#9a3412',
    light: '#fb923c',
    main: '#ea580c',
  },
};

export const defaultDarkPalette: IPalette = {
  action: {
    activatedOpacity: 0.12,
    active: 'rgba(0,0,0,0.54)',
    disabled: 'rgba(0,0,0,0.26)',
    disabledBackground: 'rgba(0,0,0,0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0,0,0,0.12)',
    focusOpacity: 0.12,
    hover: 'rgba(0,0,0,0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0,0,0,0.08)',
    selectedOpacity: 0.08,
  },
  background: {
    default: '#262626',
    paper: '#171717',
  },
  common: {
    black: '#171717',
    white: '#fafafa',
  },
  divider: 'rgba(255,255,255,0.12)',
  error: {
    contrastText: '#fff',
    dark: '#9f1239',
    light: '#fb7185',
    main: '#e11d48',
  },
  info: {
    contrastText: '#000',
    dark: '#075985',
    light: '#38bdf8',
    main: '#0284c7',
  },
  mode: 'dark',
  primary: {
    contrastText: '#fff',
    dark: '#991b1b',
    light: '#f87171',
    main: '#dc2626',
  },
  secondary: {
    contrastText: '#fff',
    dark: '#46464e',
    light: '#9f9fa9',
    main: '#71717a',
  },
  success: {
    contrastText: '#000',
    dark: '#166534',
    light: '#4ade80',
    main: '#16a34a',
  },
  text: {
    disabled: 'rgba(250, 250, 250,0.87)',
    primary: '#fafafa',
    secondary: '#d4d4d4',
  },
  warning: {
    contrastText: '#000',
    dark: '#9a3412',
    light: '#fb923c',
    main: '#ea580c',
  },
};

export const getDefaultPalette = (mode: TPaletteMode): IPalette => {
  if (mode === 'dark') {
    return defaultDarkPalette;
  }

  return defaultLightPalette;
};

export const getReactNavigationTheme = (mode: TPaletteMode): ReactNavigationTheme => {
  if (mode === 'dark') {
    return _merge(DarkTheme, {
      colors: {
        background: defaultDarkPalette.background.default,
        border: defaultDarkPalette.divider,
        card: defaultDarkPalette.background.paper,
        primary: defaultDarkPalette.primary.main,
        text: defaultDarkPalette.text.primary,
      },
      dark: true,
    } as ReactNavigationTheme);
  }

  return _merge(DefaultTheme, {
    colors: {
      background: defaultLightPalette.background.default,
      border: defaultLightPalette.divider,
      card: defaultLightPalette.background.paper,
      primary: defaultLightPalette.primary.main,
      text: defaultLightPalette.text.primary,
    },
    dark: false,
  } as ReactNavigationTheme);
};
