import './src/i18n/i18n';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import Navigation from './src/navigation/Navigation';
import useCachedResources from './src/hooks/useCachedResources';

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Navigation />

      <StatusBar />
    </SafeAreaProvider>
  );
};

export default App;
