import { ITheme } from '../../../context/theme/theme';
import { StyleSheet } from 'react-native';
import { TPaletteColor } from '../../../context/theme/palette';
import { hexToRGBA } from '../../../context/theme/utils';

interface IStylesProps {
  theme: ITheme;
  pressed?: boolean;
  fullWidth?: boolean;
  color: TPaletteColor;
}

export const buttonStyles = (props: IStylesProps) => {
  const {
    theme: {
      palette,
      shape: { borderRadius },
      spacing,
    },
    pressed,
    fullWidth,
    color,
  } = props;

  return StyleSheet.create({
    button: {
      alignItems: 'center',
      borderRadius,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    buttonLarge: {
      padding: spacing(4),
    },
    buttonMedium: {
      padding: spacing(3),
    },
    buttonSmall: {
      padding: spacing(2),
    },
    buttonVariantText: {
      color: palette[color].main,
    },
    containedVariant: {
      backgroundColor: pressed ? palette[color].light : palette[color].main,
    },
    container: {
      flexDirection: fullWidth ? 'column' : 'row',
    },
    outlinedVariant: {
      backgroundColor: pressed ? hexToRGBA(palette[color].main, palette.action.hoverOpacity) : 'transparent',
      borderColor: palette[color].main,
      borderWidth: spacing(0.5),
      padding: spacing(4) - spacing(0.5),
    },
    text: {
      color: palette[color].contrastText,
    },
    textVariant: {
      backgroundColor: pressed ? hexToRGBA(palette[color].main, palette.action.hoverOpacity) : 'transparent',
    },
  });
};

export type TButtonVariant = 'outlined' | 'text' | 'contained';
export type TButtonSize = 'small' | 'medium' | 'large';
