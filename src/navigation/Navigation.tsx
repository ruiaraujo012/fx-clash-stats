/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types/navigation';
// TODO: Use colors from lib
// import Colors from '../constants/Colors';
import IconsaxIcon from '../lib/IconsaxIcon';
import LinkingConfiguration from './linkingConfiguration';
import useColorScheme from '../hooks/useColorScheme';

import { EmojiHappy, InfoCircle } from 'iconsax-react-native';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabDriversScreen from '../screens/TabDriversScreen';
import TabHomeScreen from '../screens/TabHomeScreen';
/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  // TODO: Use colors from lib
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={
        {
          // TODO: Use colors from lib
          // tabBarActiveTintColor: Colors[colorScheme].tint,
        }
      }
    >
      <BottomTab.Screen
        component={TabHomeScreen}
        name='Home'
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              {/* // TODO: Use colors from lib */}
              {/* <IconsaxIcon Icon={InfoCircle} color={Colors[colorScheme].text} /> */}
              <IconsaxIcon Icon={InfoCircle} />
            </Pressable>
          ),
          tabBarIcon: ({ color }) => <IconsaxIcon Icon={EmojiHappy} color={color} />,
          title: 'Tab One',
        })}
      />
      <BottomTab.Screen
        component={TabDriversScreen}
        name='Drivers'
        options={{
          tabBarIcon: ({ color }) => <IconsaxIcon Icon={EmojiHappy} color={color} />,
          title: 'Drivers',
        }}
      />
    </BottomTab.Navigator>
  );
};

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={BottomTabNavigator} name='Root' options={{ headerShown: false }} />
      <Stack.Screen component={NotFoundScreen} name='NotFound' options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen component={ModalScreen} name='Modal' />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
