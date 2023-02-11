import { EmojiHappy } from 'iconsax-react-native';
import { LANGUAGES } from '../../i18n/helpers';
import { Pressable, ScrollView, View } from 'react-native';
import { useSettings } from '../../context/SettingsContext';
import { useTheme } from '../../context/theme/ThemeContext';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '../../lib/IconsaxIcon';
import Typography from '../../components/ui/Typography';

const TabHomeScreen = () => {
  const {
    theme: {
      palette: { mode, primary, background, secondary },
      shadows,
    },
  } = useTheme();

  const { t, i18n } = useTranslation();
  const { settings, dispatch } = useSettings();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <ScrollView>
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

          {/* TODO: Change this to settings */}
          <Pressable
            onPress={() => dispatch({ payload: 'dark', type: 'change_theme_mode' })}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              alignItems: 'center',
              backgroundColor: secondary.main,
              borderRadius: 10,
              margin: 10,
              display: 'flex',
              flexDirection: 'column',
              padding: 15,
              justifyContent: 'center',
            }}
          >
            <Typography variant='button'>Dark</Typography>
          </Pressable>

          <Pressable
            onPress={() => dispatch({ payload: 'light', type: 'change_theme_mode' })}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              alignItems: 'center',
              margin: 10,
              backgroundColor: primary.main,
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'column',
              padding: 15,
              justifyContent: 'center',
            }}
          >
            <Typography variant='button'>Light</Typography>
          </Pressable>

          <Pressable
            onPress={() => dispatch({ payload: 'system', type: 'change_theme_mode' })}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              alignItems: 'center',
              backgroundColor: primary.main,
              margin: 10,
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'column',
              padding: 15,
              justifyContent: 'center',
            }}
          >
            <Typography variant='button'>System</Typography>
          </Pressable>

          {/* TODO: Change this to settings */}
          <Pressable
            onPress={() => i18n.changeLanguage(i18n.language === LANGUAGES.EN_US ? LANGUAGES.PT_PT : LANGUAGES.EN_US)}
            style={[
              // eslint-disable-next-line react-native/no-inline-styles
              {
                alignItems: 'center',
                backgroundColor: primary.main,
                borderRadius: 10,
                margin: 10,
                display: 'flex',
                flexDirection: 'column',
                padding: 15,
                justifyContent: 'center',
              },
              shadows[5],
            ]}
          >
            <Typography variant='button'>Change Language</Typography>
          </Pressable>

          <IconsaxIcon Icon={EmojiHappy} color={primary.main} size={54} />
        </ScrollView>
      </View>
    </View>
  );
};

export default TabHomeScreen;
