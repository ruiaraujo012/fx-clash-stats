import { RootStackParamList } from '../types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { normalizeKey } from '../i18n/helpers';
import { useTranslation } from 'react-i18next';
import BottomTabNavigator from './BottomTabNavigator';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Typography from '../components/ui/Typography';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const { t } = useTranslation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: t('back'),
        headerTitle: (props) => {
          // eslint-disable-next-line react/prop-types
          return <Typography>{t(normalizeKey(props.children))}</Typography>;
        },
      }}
    >
      <Stack.Screen component={BottomTabNavigator} name='root' options={{ headerShown: false }} />
      <Stack.Screen
        component={SettingsScreen}
        name='settings'
        // options={{
        //   title: t('settings'),
        // }}
      />
      {/* TODO: Change this or add another one as a card instead of modal */}
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen component={ModalScreen} name='modal' />
      </Stack.Group>
      <Stack.Screen component={NotFoundScreen} name='notFound' />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
