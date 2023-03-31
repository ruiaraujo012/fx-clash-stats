import { Button, Typography } from '../../components/ui';
import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { useTheme } from '../../context/theme/ThemeContext';
import { useTranslation } from 'react-i18next';
import { useSettings } from '../../features/settings';
import { LANGUAGES } from '../../i18n/helpers';
import IconsaxIcon from '../../lib/IconsaxIcon';
import { EmojiHappy } from 'iconsax-react-native';

const Page = () => {
  const {
    theme: {
      palette: { mode, primary },
      spacing,
    },
  } = useTheme();

  const { t, i18n } = useTranslation();
  const { settings } = useSettings();
  const router = useRouter();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <ScrollView>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Button
              style={{ marginVertical: spacing(2) }}
              onPress={() => router.push('notFound')}
              color='info'
            >
              Navigate to missing page
            </Button>

            <IconsaxIcon
              Icon={EmojiHappy}
              color={primary.main}
              size={54}
            />
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant='h1'>H1</Typography>
            <Typography variant='h2'>H2</Typography>
            <Typography variant='h3'>H3</Typography>
            <Typography variant='h4'>H4</Typography>
            <Typography variant='h5'>H5</Typography>
            <Typography variant='h6'>H6</Typography>
            <Typography variant='body1'>Body1</Typography>
            <Typography variant='body2'>Body2</Typography>
            <Typography variant='button'>Button</Typography>
            <Typography variant='caption'>Caption</Typography>
            <Typography variant='overline'>Overline</Typography>
            <Typography variant='subtitle1'>Subtitle1</Typography>
            <Typography variant='subtitle2'>Subtitle2</Typography>
            <Typography>{t('helloWorld')}</Typography>
            <Typography>Settings: {settings.themeMode}</Typography>
            <Typography>Palette: {mode}</Typography>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Page;
