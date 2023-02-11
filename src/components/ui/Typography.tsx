import { TVariant } from '../../context/theme/typography';
import { Text } from 'react-native';
import { useTheme } from '../../context/theme/ThemeContext';

type TProps = Text['props'] & {
  variant?: TVariant;
};

const Typography = (props: TProps) => {
  const { variant = 'body1', style, ...other } = props;

  const { theme } = useTheme();

  return <Text {...other} style={[theme.typography[variant], style]} />;
};

export default Typography;
