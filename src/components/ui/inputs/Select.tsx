import { Text, View } from 'react-native';

interface IProps {
  options: unknown[];
}

export const Select = (props: IProps) => {
  const { options } = props;

  console.log('options >> ', options);

  return (
    <View>
      <Text>Select</Text>
    </View>
  );
};
