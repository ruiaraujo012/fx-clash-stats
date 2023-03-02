import { EmojiHappy, InfoCircle, Setting2 } from 'iconsax-react-native';
import { Pressable } from 'react-native';
import { Tabs, useRouter } from 'expo-router';
import { Typography } from '../../components/ui';
import { normalizeKey } from '../../i18n/helpers';
import { useTheme } from '../../context/theme/ThemeContext';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '../../lib/IconsaxIcon';

const Layout = () => {
  const router = useRouter();
  const {
    theme: { palette },
  } = useTheme();
  const { t } = useTranslation();

  return (
    <Tabs
      initialRouteName='home'
      screenOptions={{
        headerLeft: () => (
          // TODO: Remove this */
          <Pressable
            onPress={() => {
              router.push('modalTest');
              router.setParams({
                paramExample: Date.now().toString(),
              });
            }}
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
            onPress={() => router.push('settings')}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
          >
            <IconsaxIcon
              Icon={Setting2}
              color={palette.text.primary}
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
          if (!props.children.match(/\((.*?)\)/) && !props.children.match(/\[(.*?)\]/)) {
            // eslint-disable-next-line react/prop-types
            return <Typography>{t(normalizeKey(props.children))}</Typography>;
          }
        },
        tabBarActiveTintColor: palette.primary.main,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name='drivers'
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : size} />
          ),
        }}
      />
      <Tabs.Screen
        name='compareDrivers'
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : size} />
          ),
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : size} />
          ),
        }}
      />
      <Tabs.Screen
        name='compareParts'
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : size} />
          ),
        }}
      />
      <Tabs.Screen
        name='parts'
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <IconsaxIcon Icon={EmojiHappy} color={color} size={focused ? 30 : size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
