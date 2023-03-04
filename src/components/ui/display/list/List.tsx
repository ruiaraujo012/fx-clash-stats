import { ReactNode } from 'react';
import { View, ViewProps } from 'react-native';
import { createListStyles } from './utils';
import { useTheme } from '../../../../context/theme/ThemeContext';

export type TListProps = ViewProps & {
  children: ReactNode;
};

export const List = (props: TListProps) => {
  const { children, style, ...otherViewProps } = props;

  const { theme } = useTheme();
  const styles = createListStyles({ theme });

  return (
    <View style={[styles.container, style]} {...otherViewProps}>
      {children}
    </View>
  );
};
