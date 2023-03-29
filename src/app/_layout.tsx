import '../i18n/i18n';

import { ThemeProvider as NavigationThemeProvider } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SettingsProvider, useSettings } from '../features/settings';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '../context/theme/ThemeContext';
import { getReactNavigationTheme } from '../context/theme/palette';
import { useMemo } from 'react';
import StackHeader from '../components/common/Headers/StackHeader';
import useCachedResources from '../hooks/useCachedResources';
import useColorScheme from '../hooks/useColorScheme';

const Root = () => {
  const {
    settings: { themeMode },
  } = useSettings();

  const colorScheme = useColorScheme();

  const mode = useMemo(() => (themeMode === 'system' ? colorScheme : themeMode), [colorScheme, themeMode]);

  const navigationTheme = getReactNavigationTheme(mode);

  return (
    <NavigationThemeProvider value={navigationTheme}>
      <ThemeProvider mode={mode}>
        <Stack
          screenOptions={{
            header: (props) => <StackHeader {...props} />,
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
