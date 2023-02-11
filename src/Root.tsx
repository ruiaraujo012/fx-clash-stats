import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from './context/theme/ThemeContext';
import { useMemo } from 'react';
import { useSettings } from './context/SettingsContext';
import Navigation from './navigation/Navigation';
import useColorScheme from './hooks/useColorScheme';

const Root = () => {
  const {
    settings: { themeMode },
  } = useSettings();

  const colorScheme = useColorScheme();

  const mode = useMemo(() => {
    return themeMode === 'system' ? colorScheme : themeMode;
  }, [colorScheme, themeMode]);

  return (
    <ThemeProvider mode={mode}>
      <Navigation />

      <StatusBar />
    </ThemeProvider>
  );
};

export default Root;
