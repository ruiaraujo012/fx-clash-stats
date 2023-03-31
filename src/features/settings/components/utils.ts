import { StyleSheet } from 'react-native';
import type { ITheme } from '../../../context/theme/theme';

interface IStylesProps {
  theme: ITheme;
}

export const generateSettingsListStyles = (props: IStylesProps) => {
  const { theme } = props;

  return StyleSheet.create({
    checkIcon: {
      alignItems: 'center',
      columnGap: theme.spacing(1),
      display: 'flex',
      flexDirection: 'row',
    },
    container: {
      backgroundColor: theme.palette.background.default,
      flex: 1,
      paddingHorizontal: theme.spacing(2),
      paddingTop: theme.spacing(1),
    },
    item: {
      alignItems: 'center',
      borderRadius: theme.shape.borderRadius,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: theme.spacing(1),
      padding: theme.spacing(3),
    },
  });
};
