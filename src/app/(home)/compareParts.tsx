import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 'auto',
    maxWidth: 960,
  },
  subtitle: {
    color: '#38434D',
    fontSize: 36,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
});

const Page = () => (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Compare Parts Tab</Text>
      </View>
    </View>
  );

export default Page;
