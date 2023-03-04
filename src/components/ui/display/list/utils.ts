import { ITheme } from '../../../../context/theme/theme';
import { StyleSheet } from 'react-native';

interface IStylesProps {
  theme: ITheme;
}

export const createListStyles = (props: IStylesProps) => {
  const {
    theme: { spacing },
  } = props;

  return StyleSheet.create({
    container: {
      marginHorizontal: spacing(2),
      marginVertical: spacing(3),
      rowGap: spacing(2),
    },
  });
};
