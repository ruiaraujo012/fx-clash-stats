import { Text, View } from 'react-native';

interface IProps {
  options: any[];
}

const Select = (props: IProps) => {
  const { options } = props;

  return (
    <View>
      <Text>Select</Text>
    </View>
  );
};

export default Select;
