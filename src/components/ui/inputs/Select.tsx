import { Text, View } from 'react-native';

interface IProps {
  options: any[];
}

export const Select = (props: IProps) => {
  const { options } = props;

  return (
    <View>
      <Text>Select</Text>
    </View>
  );
};
