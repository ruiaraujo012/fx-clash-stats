import { DarkTheme, DefaultTheme, Theme } from '@react-navigation/native';

// https://github.com/react-navigation/react-navigation/issues/9161

const customDarkTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(229,66,37)',
  },
  dark: true,
};

const customLightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(229,66,37)',
  },
  dark: false,
};

const customTheme = {
  dark: customDarkTheme,
  light: customLightTheme,
} as const;

export default customTheme;
