import { StyleSheet } from 'react-native';
import type { ITheme } from '../../../../context/theme/theme';

interface IStylesProps {
  theme: ITheme;
  pressed?: boolean;
}

export const createListItemStyles = (props: IStylesProps) => {
  const {
    theme: { spacing, palette, shape },
    pressed,
  } = props;

  return StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: pressed ? palette.action.hover : palette.background.paper,
      borderRadius: shape.borderRadius,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: spacing(3),
    },
    rightContainer: {
      alignItems: 'center',
      columnGap: spacing(1),
      display: 'flex',
      flexDirection: 'row',
    },
    value: {
      color: palette.text.secondary,
    },
  });
};
