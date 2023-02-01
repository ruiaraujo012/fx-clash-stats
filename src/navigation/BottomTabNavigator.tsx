import { Cup, EmojiHappy, InfoCircle } from 'iconsax-react-native';
import { Pressable } from 'react-native';
import { RootTabParamList, RootTabScreenProps } from '../types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
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
  const { colors } = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarIconStyle: {
          marginTop: 5,
        },
        tabBarLabelStyle: {
          paddingBottom: 10,
        },
        tabBarStyle: {
          // (iconMarginTop) + (tabBarLabelPaddingBottom) + (iconsaxSize) + (extraSpace)
          minHeight: 10 + 5 + 25 + 20,
        },
      }}
    >
      <BottomTab.Screen
        component={TabDriversScreen}
        name='Drivers'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : undefined} />
          ),
          title: 'Drivers',
        }}
      />

      <BottomTab.Screen
        component={TabCompareDriversScreen}
        name='CompareDrivers'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : undefined} />
          ),
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
              <IconsaxIcon
                Icon={InfoCircle}
                color={colors.text}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  marginRight: 15,
                }}
              />
            </Pressable>
          ),
          tabBarIcon: ({ color, focused }) => <IconsaxIcon Icon={Cup} color={color} size={focused ? 30 : undefined} />,
          title: 'Home',
        })}
      />

      <BottomTab.Screen
        component={TabComparePartsScreen}
        name='CompareParts'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : undefined} />
          ),
          title: 'Compare parts',
        }}
      />

      <BottomTab.Screen
        component={TabPartsScreen}
        name='Parts'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : undefined} />
          ),
          title: 'Parts',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
