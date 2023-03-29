import { StyleSheet } from 'react-native';
import type { ITheme } from '../../../../context/theme/theme';
import type { TPaletteColor } from '../../../../context/theme/palette';

export type TDividerColor = TPaletteColor | 'default';
// 'inset'
export type TDividerVariant = 'fullWidth' | 'middle';

interface IStylesProps {
  theme: ITheme;
  color: TDividerColor;
  variant: TDividerVariant;
}

export const createDividerStyles = (props: IStylesProps) => {
  const {
    color,
    theme: {
      palette,
      shape: { borderRadius },
      spacing,
    },
    variant,
  } = props;

  const borderColor = color === 'default' ? palette.action.focus : palette[color].main;
  const borderMargin = variant === 'fullWidth' ? 0 : spacing(2);
  const borderWidth = spacing(0.3) / 2;

  return StyleSheet.create({
    divider: {
      borderBottomColor: borderColor,
      borderBottomWidth: borderWidth,
      borderRadius,
      borderTopColor: borderColor,
      borderTopWidth: borderWidth,
      marginHorizontal: borderMargin,
    },
  });
};
