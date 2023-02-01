/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useColorScheme } from 'react-native';
import LinkingConfiguration from './linkingConfiguration';
import RootStackNavigator from './RootStackNavigator';
import customTheme from '../theme/config';

const Navigation = () => {
  const colorScheme = useColorScheme();

  const { light, dark } = customTheme;

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? dark : light}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
