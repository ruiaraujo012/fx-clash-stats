import { StyleSheet, Text, View } from 'react-native';
import Typography from './ui/Typography';

const styles = StyleSheet.create({
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
});

interface IProps {
  path: string;
}

const EditScreenInfo = (props: IProps) => {
  const { path } = props;

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>Open up the code for this screen:</Text>

        <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          <Typography>{path}</Typography>
        </View>

        <Text style={styles.getStartedText}>
          Change any of the text, save the file, and your app will automatically update.
        </Text>
      </View>
    </View>
  );
};

export default EditScreenInfo;
