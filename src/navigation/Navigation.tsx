/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';

import LinkingConfiguration from './linkingConfiguration';
import RootStackNavigator from './RootStackNavigator';

interface IProps {
  colorScheme: ColorSchemeName;
}

const Navigation = (props: IProps) => {
  const { colorScheme } = props;

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
