import { ITheme } from '../../context/theme/theme';
import { Pressable, PressableProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { ReactElement } from 'react';
import { TElevation } from '../../context/theme/shadows';
import { TPaletteColor } from '../../context/theme/palette';
import { useTheme } from '../../context/theme/ThemeContext';
import Typography, { TTypographyProps } from './Typography';

interface IStylesProps {
  theme: ITheme;
  pressed?: boolean;
  fullWidth?: boolean;
  color: TPaletteColor;
}

const buttonStyles = (props: IStylesProps) => {
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
    // eslint-disable-next-line react-native/no-unused-styles
    border: {
      borderColor: palette[color].dark,
      borderWidth: spacing(0.5),
      padding: spacing(4) - spacing(0.5),
    },
    // eslint-disable-next-line react-native/no-unused-styles
    button: {
      alignItems: 'center',
      backgroundColor: pressed ? palette[color].light : palette[color].main,
      borderRadius,
      flexDirection: 'row',
      justifyContent: 'center',
      padding: spacing(4),
    },
    // eslint-disable-next-line react-native/no-unused-styles
    container: {
      flexDirection: fullWidth ? 'column' : 'row',
    },
    // eslint-disable-next-line react-native/no-unused-styles
    text: {
      color: palette[color].contrastText,
    },
  });
};

// TODO: Add variants ('outlined', 'text', 'elevated')
interface IProps {
  children: ReactElement | string;
  style?: StyleProp<ViewStyle>;
  typographyProps?: TTypographyProps;
  fullWidth?: boolean;
  color?: TPaletteColor;
  elevation?: TElevation;
}

type TProps = IProps & Omit<PressableProps, 'children' | 'style'>;

const Button = (props: TProps) => {
  const { children, style, typographyProps, fullWidth = false, color = 'primary', elevation = 3, ...other } = props;

  const { theme } = useTheme();
  const styles = buttonStyles({ color, fullWidth, theme });

  return (
    <View style={[styles.container, theme.shadows[elevation]]}>
      <Pressable
        // onPress={() => dispatch({ payload: 'dark', type: 'change_theme_mode' })}
        style={({ pressed }) => {
          const { button, border } = buttonStyles({ color, pressed, theme });

          return [button, pressed && border, theme.shadows[elevation], style];
        }}
        {...other}
      >
        <Typography style={styles.text} variant='button' {...typographyProps}>
          {children}
        </Typography>
      </Pressable>
    </View>
  );
};

export default Button;
