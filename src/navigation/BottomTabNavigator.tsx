import { EmojiHappy, InfoCircle } from 'iconsax-react-native';
import { Pressable, useColorScheme } from 'react-native';
import { RootTabParamList, RootTabScreenProps } from '../types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconsaxIcon from '../lib/IconsaxIcon';
import TabCompareDriversScreen from '../screens/tabs/TabCompareDriversScreen';
import TabComparePartsScreen from '../screens/tabs/TabComparePartsScreen';
import TabDriversScreen from '../screens/tabs/TabDriversScreen';
import TabHomeScreen from '../screens/tabs/TabHomeScreen';
import TabPartsScreen from '../screens/tabs/TabPartsScreen';

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
        component={TabDriversScreen}
        name='Drivers'
        options={{
          tabBarIcon: ({ color }) => <IconsaxIcon Icon={EmojiHappy} color={color} />,
          title: 'Drivers',
        }}
      />

      <BottomTab.Screen
        component={TabCompareDriversScreen}
        name='CompareDrivers'
        options={{
          tabBarIcon: ({ color }) => <IconsaxIcon Icon={EmojiHappy} color={color} />,
          title: 'Compare drivers',
        }}
      />

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
              <IconsaxIcon
                Icon={InfoCircle}
                color='red'
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  marginRight: 15,
                }}
              />
            </Pressable>
          ),
          tabBarIcon: ({ color }) => <IconsaxIcon Icon={EmojiHappy} color={color} />,
          title: 'Home',
        })}
      />

      <BottomTab.Screen
        component={TabComparePartsScreen}
        name='CompareParts'
        options={{
          tabBarIcon: ({ color }) => <IconsaxIcon Icon={EmojiHappy} color={color} />,
          title: 'Compare parts',
        }}
      />

      <BottomTab.Screen
        component={TabPartsScreen}
        name='Parts'
        options={{
          tabBarIcon: ({ color }) => <IconsaxIcon Icon={EmojiHappy} color={color} />,
          title: 'Parts',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
