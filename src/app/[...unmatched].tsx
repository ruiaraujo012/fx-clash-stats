import { Button, Typography } from '../components/ui';
import { Stack, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

const Unmatched = () => {
  const { t } = useTranslation(['common']);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'notFound' }} />

      <Typography variant='h6'>{t('screenNotExists')}</Typography>

      <Button onPress={() => router.push('/')} variant='text'>
        {t('goToHomeScreen')}
      </Button>
    </View>
  );
};

export default Unmatched;
