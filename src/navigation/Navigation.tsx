/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { getReactNavigationTheme } from '../context/theme/palette';
import { useTheme } from '../context/theme/ThemeContext';
import LinkingConfiguration from './linkingConfiguration';
import RootStackNavigator from './RootStackNavigator';

const Navigation = () => {
  const {
    theme: {
      palette: { mode },
    },
  } = useTheme();

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={getReactNavigationTheme(mode)}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
