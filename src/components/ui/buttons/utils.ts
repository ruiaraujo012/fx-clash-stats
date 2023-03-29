import { StyleSheet } from 'react-native';
import { hexToRGBA } from '../../../context/theme/utils';
import type { ITheme } from '../../../context/theme/theme';
import type { TPaletteColor } from '../../../context/theme/palette';

// ===================================================
// ===                    Button                   ===
// ===================================================

export type TButtonVariant = 'outlined' | 'text' | 'contained';
export type TButtonSize = 'small' | 'medium' | 'large';

interface IButtonStylesProps {
  theme: ITheme;
  pressed?: boolean;
  fullWidth?: boolean;
  color: TPaletteColor;
}

export const buttonStyles = (props: IButtonStylesProps) => {
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
      padding: spacing(3),
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
    icon: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      gap: spacing(1),
    },
    outlinedVariant: {
      backgroundColor: pressed ? hexToRGBA(palette[color].main, palette.action.hoverOpacity) : 'transparent',
      borderColor: palette[color].main,
      borderWidth: spacing(0.5),
      padding: spacing(4) - spacing(0.5),
    },
    text: {
      color: palette[color].contrastText,
      textAlignVertical: 'center',
    },
    textVariant: {
      backgroundColor: pressed ? hexToRGBA(palette[color].main, palette.action.hoverOpacity) : 'transparent',
    },
  });
};

// ===================================================
// ===                  Icon Button                ===
// ===================================================

export type TIconButtonSize = 'small' | 'medium' | 'large';

interface IIconButtonStylesProps {
  theme: ITheme;
  pressed?: boolean;
  color: TPaletteColor;
}

export const iconButtonStyles = (props: IIconButtonStylesProps) => {
  const {
    theme: { palette },
    pressed,
  } = props;

  return StyleSheet.create({
    iconButton: {
      alignItems: 'center',
      backgroundColor: pressed ? palette.action.hover : 'transparent',
      borderRadius: 40 / 2,
      display: 'flex',
      flexDirection: 'row',
      height: 40,
      justifyContent: 'center',
      width: 40,
    },
  });
};
