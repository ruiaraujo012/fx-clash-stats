import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Typography from '../components/ui/Typography';
import Button from '../components/ui/buttons/Button';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

interface IProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'notFound', undefined>;
}

const NotFoundScreen = (props: IProps) => {
  const { navigation } = props;

  // TODO: Add i18n
  return (
    <View style={styles.container}>
      <Typography variant='subtitle1'>{`This screen does'nt exist.`}</Typography>

      <Button variant='text' onPress={() => navigation.replace('root')}>
        Go to home screen!
      </Button>
    </View>
  );
};

export default NotFoundScreen;
