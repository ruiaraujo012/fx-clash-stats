import { StyleSheet, View } from 'react-native';
import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

interface IProps {
  children?: ReactNode;
  style?: ViewStyle;
}

const HeaderLeft = (props: IProps) => {
  const { children, style } = props;

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={[styles.container, style]}
    >
      {children}
    </View>
  );
};

export default HeaderLeft;
