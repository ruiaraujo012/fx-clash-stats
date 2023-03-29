import { View } from 'react-native';
import { createDividerStyles } from './utils';
import { useTheme } from '../../../../context/theme/ThemeContext';
import type { TDividerColor, TDividerVariant} from './utils';
import type { ViewProps } from 'react-native';

export type TDividerProps = ViewProps & {
  variant?: TDividerVariant;
  color?: TDividerColor;
};

export const Divider = (props: TDividerProps) => {
  const { variant = 'fullWidth', color = 'default', style, ...other } = props;

  const { theme } = useTheme();
  const { divider } = createDividerStyles({ color, theme, variant });

  return <View style={[divider, style]} {...other} />;
};
