import { Text } from 'react-native';

export const MonoText = (props: Text['props']) => {
  // eslint-disable-next-line react-native/no-inline-styles
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
};
