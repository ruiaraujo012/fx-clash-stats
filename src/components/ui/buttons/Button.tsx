import { Pressable, PressableProps, StyleProp, View, ViewStyle } from 'react-native';
import { ReactElement } from 'react';
import { TButtonSize, TButtonVariant, buttonStyles } from './utils';
import { TElevation } from '../../../context/theme/shadows';
import { TPaletteColor } from '../../../context/theme/palette';
import { useTheme } from '../../../context/theme/ThemeContext';
import Typography, { TTypographyProps } from '../Typography';

interface IButtonProps {
  typographyProps?: TTypographyProps;
  fullWidth?: boolean;
  color?: TPaletteColor;
  elevation?: TElevation;
  variant?: TButtonVariant;
  size?: TButtonSize;
}

interface IBaseProps {
  children: ReactElement | string;
  style?: StyleProp<ViewStyle>;
}

type TPressableProps = Omit<PressableProps, 'children' | 'style'>;

type TProps = IBaseProps & IButtonProps & TPressableProps;

const Button = (props: TProps) => {
  const {
    children,
    style,
    typographyProps,
    fullWidth = false,
    color = 'primary',
    elevation = 3,
    variant = 'contained',
    size = 'medium',
    ...other
  } = props;

  const { theme } = useTheme();
  const styles = buttonStyles({ color, fullWidth, theme });

  return (
    <View style={[styles.container, theme.shadows[elevation]]}>
      <Pressable
        style={({ pressed }) => {
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
        }}
        {...other}
      >
        <Typography
          style={[styles.text, variant !== 'contained' && styles.buttonVariantText]}
          variant='button'
          {...typographyProps}
        >
          {children}
        </Typography>
      </Pressable>
    </View>
  );
};

export default Button;
