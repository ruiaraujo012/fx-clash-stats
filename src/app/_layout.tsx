import '../i18n/i18n';

import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SettingsProvider, useSettings } from '../features/settings';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '../context/theme/ThemeContext';
import { Typography } from '../components/ui';
import { getReactNavigationTheme } from '../context/theme/palette';
import { normalizeKey } from '../i18n/helpers';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import useCachedResources from '../hooks/useCachedResources';
import useColorScheme from '../hooks/useColorScheme';

const Root = () => {
  const { t } = useTranslation();

  const {
    settings: { themeMode },
  } = useSettings();

  const colorScheme = useColorScheme();

  const mode = useMemo(() => {
    return themeMode === 'system' ? colorScheme : themeMode;
  }, [colorScheme, themeMode]);

  return (
    <NavigationThemeProvider value={getReactNavigationTheme(mode)}>
      <ThemeProvider mode={mode}>
        {/* <Navigation /> */}
        <Stack
          screenOptions={{
            headerBackTitle: t('back'),
            headerTitle: (props) => {
              // eslint-disable-next-line react/prop-types
              if (!props.children.match(/\((.*?)\)/) && !props.children.match(/\[(.*?)\]/)) {
                // eslint-disable-next-line react/prop-types
                return <Typography>{t(normalizeKey(props.children))}</Typography>;
              }
            },
          }}
        >
          <Stack.Screen
            name='(home)'
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name='modalTest'
            options={{
              // Set the presentation mode to modal for our modal route.
              presentation: 'modal',
            }}
          />
        </Stack>

        <StatusBar style={mode === 'dark' ? 'light' : 'dark'} />
      </ThemeProvider>
    </NavigationThemeProvider>
  );
};

const Layout = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <SplashScreen />;
  }

  return (
    <SafeAreaProvider>
      <SettingsProvider>
        <Root />
      </SettingsProvider>
    </SafeAreaProvider>
  );
};

export default Layout;
