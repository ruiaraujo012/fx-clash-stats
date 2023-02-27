import { Cup, EmojiHappy, InfoCircle, Setting2 } from 'iconsax-react-native';
import { Pressable } from 'react-native';
import { RootTabParamList } from '../types/navigation';
import { Typography } from '../components/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { normalizeKey } from '../i18n/helpers';
import { useTheme } from '../context/theme/ThemeContext';
import { useTranslation } from 'react-i18next';
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
  const {
    theme: { palette },
  } = useTheme();
  const { t } = useTranslation();

  return (
    <BottomTab.Navigator
      initialRouteName='home'
      screenOptions={({ navigation }) => ({
        headerLeft: () => (
          // TODO: Remove this */
          <Pressable
            onPress={() =>
              navigation.navigate('modal', {
                paramExample: Date.now(),
              })
            }
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <IconsaxIcon
              Icon={InfoCircle}
              color={palette.text.primary}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                marginLeft: 15,
              }}
            />
          </Pressable>
        ),
        headerRight: () => (
          <Pressable
            onPress={() => navigation.navigate('settings')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <IconsaxIcon
              Icon={Setting2}
              color={palette.secondary.main}
              size={30}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                marginRight: 15,
              }}
            />
          </Pressable>
        ),
        headerTitle: (props) => {
          // eslint-disable-next-line react/prop-types
          return <Typography>{t(normalizeKey(props.children))}</Typography>;
        },
        tabBarActiveTintColor: palette.primary.main,
        tabBarShowLabel: false,
      })}
    >
      <BottomTab.Screen
        component={TabDriversScreen}
        name='drivers'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : undefined} />
          ),
        }}
      />

      <BottomTab.Screen
        component={TabCompareDriversScreen}
        name='compareDrivers'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : undefined} />
          ),
        }}
      />

      <BottomTab.Screen
        component={TabHomeScreen}
        name='home'
        options={{
          tabBarIcon: ({ color, focused }) => <IconsaxIcon Icon={Cup} color={color} size={focused ? 30 : undefined} />,
        }}
      />

      <BottomTab.Screen
        component={TabComparePartsScreen}
        name='compareParts'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : undefined} />
          ),
        }}
      />

      <BottomTab.Screen
        component={TabPartsScreen}
        name='parts'
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : undefined} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
