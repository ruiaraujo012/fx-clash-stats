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

export interface IText {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface IAction {
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

export interface IPalette {
  common: ICommonColors;
  mode: TPaletteMode;
  primary: IPaletteColor;
  secondary: IPaletteColor;
  error: IPaletteColor;
  warning: IPaletteColor;
  info: IPaletteColor;
  success: IPaletteColor;
  text: IText;
  divider: string;
  action: IAction;
  background: string;
}

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
  background: '#f8fafc',
  common: {
    black: '#18181b',
    white: '#fafafa',
  },
  divider: 'rgba(0,0,0,0.12)',
  error: {
    contrastText: '#ffffff',
    dark: '#9f1239',
    light: '#fb7185',
    main: '#e11d48',
  },
  info: {
    contrastText: '#000000',
    dark: '#075985',
    light: '#38bdf8',
    main: '#0284c7',
  },
  mode: 'light',
  primary: {
    contrastText: '#ffffff',
    dark: '#991b1b',
    light: '#f87171',
    main: '#dc2626',
  },
  secondary: {
    contrastText: '#ffffff',
    dark: '#27272a',
    light: '#a1a1aa',
    main: '#52525b',
  },
  success: {
    contrastText: '#000000',
    dark: '#166534',
    light: '#4ade80',
    main: '#16a34a',
  },
  text: {
    disabled: 'rgba(15,23,42,0.87)',
    primary: '#0f172a',
    secondary: '#475569',
  },
  warning: {
    contrastText: '#000000',
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
  background: '#0f172a',
  common: {
    black: '#18181b',
    white: '#fafafa',
  },
  divider: 'rgba(255,255,255,0.12)',
  error: {
    contrastText: '#ffffff',
    dark: '#9f1239',
    light: '#fb7185',
    main: '#e11d48',
  },
  info: {
    contrastText: '#000000',
    dark: '#075985',
    light: '#38bdf8',
    main: '#0284c7',
  },
  mode: 'dark',
  primary: {
    contrastText: '#ffffff',
    dark: '#991b1b',
    light: '#f87171',
    main: '#dc2626',
  },
  secondary: {
    contrastText: '#ffffff',
    dark: '#27272a',
    light: '#a1a1aa',
    main: '#52525b',
  },
  success: {
    contrastText: '#000000',
    dark: '#166534',
    light: '#4ade80',
    main: '#16a34a',
  },
  text: {
    disabled: 'rgba(248,250,252,0.87)',
    primary: '#f8fafc',
    secondary: '#cbd5e1',
  },
  warning: {
    contrastText: '#000000',
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
