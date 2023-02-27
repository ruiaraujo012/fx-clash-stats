import { Divider } from '../../../components/ui';
import { ITheme } from '../../../context/theme/theme';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../../context/theme/ThemeContext';
import { useTranslation } from 'react-i18next';
import SettingItem from './SettingItem';

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: theme.shape.borderRadius,
      margin: theme.spacing(3),
    },
  });

export const Settings = () => {
  const { t } = useTranslation(['settings']);
  const { theme } = useTheme();

  const { container } = styles(theme);

  return (
    <View style={container}>
      <SettingItem label={t('settings:language')} />
      <Divider />
      <SettingItem label={t('settings:appearance')} />
    </View>
  );
};
