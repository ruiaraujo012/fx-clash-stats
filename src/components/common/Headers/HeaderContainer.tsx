import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../../context/theme/ThemeContext';
import type { EdgeInsets } from 'react-native-safe-area-context';
import type { ITheme } from '../../../context/theme/theme';
import type { ReactNode } from 'react';

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
    root: {
      backgroundColor: palette.background.paper,
      borderBottomColor: palette.divider,
      borderBottomWidth: spacing(0.2),
      paddingHorizontal: spacing(2),
      paddingTop: insets.top + spacing(2),
      paddingVertical: spacing(2),
    },
  });
};

interface IProps {
  children: ReactNode;
}

const HeaderContainer = (props: IProps) => {
  const { children } = props;

  const insets = useSafeAreaInsets();
  const { theme } = useTheme();

  const styles = generateStyles({ insets, theme });

  return (
    <View style={styles.root}>
      {/* Header container */}
      <View style={styles.container}>{children}</View>
    </View>
  );
};

export default HeaderContainer;
