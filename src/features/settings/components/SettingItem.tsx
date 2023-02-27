import { ITheme } from '../../../context/theme/theme';
import { StyleSheet, View } from 'react-native';
import { Typography } from '../../../components/ui';
import { useTheme } from '../../../context/theme/ThemeContext';

const styles = (theme: ITheme) =>
  StyleSheet.create({
    container: {
      padding: theme.spacing(2),
      // borderRadius: theme.shape.borderRadius,
    },
  });

interface IProps {
  label: string;
}

const SettingItem = (props: IProps) => {
  const { label } = props;

  const { theme } = useTheme();

  const { container } = styles(theme);

  return (
    <View style={container}>
      <Typography>{label}</Typography>
    </View>
  );
};

export default SettingItem;
