import { Text } from 'react-native';

const CustomText = (props: Text['props']) => {
  // eslint-disable-next-line react-native/no-inline-styles
  return <Text {...props} style={[props.style, { fontFamily: 'Poppins' }]} />;
};

export default CustomText;
