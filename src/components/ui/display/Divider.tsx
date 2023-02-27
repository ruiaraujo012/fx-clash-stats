import { TDividerColor, TDividerVariant, createDividerStyles } from './utils';
import { View } from 'react-native';
import { useTheme } from '../../../context/theme/ThemeContext';

export type TDividerProps = View['props'] & {
  variant?: TDividerVariant;
  color?: TDividerColor;
};

export const Divider = (props: TDividerProps) => {
  const { variant = 'fullWidth', color = 'default', style, ...other } = props;

  const { theme } = useTheme();
  const { divider } = createDividerStyles({ color, theme, variant });

  return <View style={[divider, style]} {...other} />;
};
