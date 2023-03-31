import { CloseCircle } from 'iconsax-react-native';
import { IconButton } from '../../buttons/IconButton';
import { Platform, StyleSheet, View } from 'react-native';
import { Typography } from '../../typography/Typography';
import { normalizeKey } from '../../../../i18n/helpers';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../../../context/theme/ThemeContext';
import { useTranslation } from 'react-i18next';
import type { EdgeInsets } from 'react-native-safe-area-context';
import type { ITheme } from '../../../../context/theme/theme';

interface IStylesProps {
  theme: ITheme;
  insets: EdgeInsets;
}

const generateStyles = (props: IStylesProps) => {
  const {
    theme: { palette, spacing },
    insets,
  } = props;

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    left: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    right: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    root: {
      backgroundColor: palette.background.paper,
      borderBottomColor: palette.divider,
      borderBottomWidth: spacing(0.2),
      paddingHorizontal: spacing(2),
      paddingTop: Platform.OS === 'android' ? 0 : insets.top,
      paddingVertical: spacing(1),
    },
  });
};

interface IProps {
  onPressClose: () => void;
  title: string;
}

export const ModalHeader = (props: IProps) => {
  const { onPressClose, title } = props;

  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();

  const styles = generateStyles({
    insets,
    theme,
  });

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.left} />

        <Typography>{t(normalizeKey(title))}</Typography>

        <View style={styles.right}>
          <IconButton
            Icon={CloseCircle}
            color='secondary'
            onPress={onPressClose}
          />
        </View>
      </View>
    </View>
  );
};
