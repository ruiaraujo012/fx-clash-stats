import { TTypographyVariant } from '../../../context/theme/typography';
import { Text } from 'react-native';
import { useTheme } from '../../../context/theme/ThemeContext';

export type TTypographyProps = Text['props'] & {
  variant?: TTypographyVariant;
};

export const Typography = (props: TTypographyProps) => {
  const { variant = 'body1', style, ...other } = props;

  const { theme } = useTheme();

  return <Text {...other} style={[theme.typography[variant], style]} />;
};
