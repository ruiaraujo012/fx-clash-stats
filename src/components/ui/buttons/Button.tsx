import { Pressable, View } from 'react-native';
import { Typography } from '../typography/Typography';
import { buttonStyles } from './utils';
import { useCallback } from 'react';
import { useTheme } from '../../../context/theme/ThemeContext';
import IconsaxIcon from '../../../lib/IconsaxIcon';
import type { Icon, IconProps } from 'iconsax-react-native';
import type { PressableProps, PressableStateCallbackType, StyleProp, ViewStyle } from 'react-native';
import type { ReactElement } from 'react';
import type { TButtonSize, TButtonVariant } from './utils';
import type { TElevation } from '../../../context/theme/shadows';
import type { TPaletteColor } from '../../../context/theme/palette';
import type { TTypographyProps } from '../typography/Typography';

interface IButtonProps {
  typographyProps?: TTypographyProps;
  fullWidth?: boolean;
  color?: TPaletteColor;
  elevation?: TElevation;
  variant?: TButtonVariant;
  size?: TButtonSize;
  StartIcon?: Icon;
  startIconProps?: IconProps;
  EndIcon?: Icon;
  endIconProps?: IconProps;
}

interface IBaseProps {
  children: ReactElement | string;
  style?: StyleProp<ViewStyle>;
}

type TPressableProps = Omit<PressableProps, 'children' | 'style'>;

type TProps = IBaseProps & IButtonProps & TPressableProps;

export const Button = (props: TProps) => {
  const {
    children,
    style,
    typographyProps,
    fullWidth = false,
    color = 'primary',
    elevation = 0,
    variant = 'contained',
    size = 'medium',
    startIconProps,
    StartIcon,
    endIconProps,
    EndIcon,
    ...other
  } = props;

  const { theme } = useTheme();
  const styles = buttonStyles({ color, fullWidth, theme });

  const handleCreateStyle = useCallback(
    ({ pressed }: PressableStateCallbackType) => {
      const { button, containedVariant, outlinedVariant, textVariant, buttonLarge, buttonMedium, buttonSmall } =
        buttonStyles({
          color,
          pressed,
          theme,
        });

      const buttonStyle: StyleProp<ViewStyle>[] = [button];

      switch (variant) {
        case 'contained':
          buttonStyle.push(containedVariant, theme.shadows[elevation]);
          break;

        case 'outlined':
          buttonStyle.push(button, outlinedVariant);
          break;

        case 'text':
          buttonStyle.push(button, textVariant);
          break;

        default:
          break;
      }

      switch (size) {
        case 'large':
          buttonStyle.push(buttonLarge);
          break;

        case 'medium':
          buttonStyle.push(buttonMedium);
          break;

        case 'small':
          buttonStyle.push(buttonSmall);
          break;

        default:
          break;
      }

      return [...buttonStyle, style];
    },
    [color, elevation, size, style, theme, variant],
  );

  return (
    <View style={[styles.container, theme.shadows[elevation]]}>
      <Pressable
        style={handleCreateStyle}
        {...other}
      >
        <View style={styles.icon}>
          {StartIcon && (
            <IconsaxIcon
              color={theme.palette[color].main}
              size={20}
              {...startIconProps}
              Icon={StartIcon}
            />
          )}

          <Typography
            style={[styles.text, variant !== 'contained' && styles.buttonVariantText]}
            variant='button'
            {...typographyProps}
          >
            {children}
          </Typography>

          {EndIcon && (
            <IconsaxIcon
              color={theme.palette[color].main}
              size={20}
              {...endIconProps}
              Icon={EndIcon}
            />
          )}
        </View>
      </Pressable>
    </View>
  );
};

Button.displayName = 'Button';
