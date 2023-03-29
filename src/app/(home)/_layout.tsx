import { EmojiHappy } from 'iconsax-react-native';
import { Tabs } from 'expo-router';
import { useTheme } from '../../context/theme/ThemeContext';
import IconsaxIcon from '../../lib/IconsaxIcon';
import MainBottomTabHeader from '../../components/common/Headers/MainBottomTabHeader';

const Layout = () => {
  const { theme } = useTheme();

  return (
    <Tabs
      initialRouteName='home'
      screenOptions={{
        header: (props) => <MainBottomTabHeader bottomTabHeaderProps={props} />,
        tabBarActiveTintColor: theme.palette.primary.main,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name='drivers'
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <IconsaxIcon
              Icon={EmojiHappy}
              color={color}
              size={focused ? 30 : size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='compareDrivers'
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <IconsaxIcon
              Icon={EmojiHappy}
              color={color}
              size={focused ? 30 : size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <IconsaxIcon
              Icon={EmojiHappy}
              color={color}
              size={focused ? 30 : size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='compareParts'
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <IconsaxIcon
              Icon={EmojiHappy}
              color={color}
              size={focused ? 30 : size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='parts'
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <IconsaxIcon
              Icon={EmojiHappy}
              color={color}
              size={focused ? 30 : size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
