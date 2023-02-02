import { EmojiHappy } from 'iconsax-react-native';
import { LANGUAGES } from '../../i18n/helpers';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '../../lib/IconsaxIcon';

const TabHomeScreen = () => {
  const { colors } = useTheme();
  const { t, i18n } = useTranslation();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <ScrollView>
          <Text>{t('helloWorld')}</Text>

          {/* TODO: Change this to settings */}
          <Pressable
            onPress={() => i18n.changeLanguage(i18n.language === LANGUAGES.EN_US ? LANGUAGES.PT_PT : LANGUAGES.EN_US)}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              alignItems: 'center',
              backgroundColor: 'red',
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'column',
              height: 50,
              justifyContent: 'center',
              width: 200,
            }}
          >
            <Text>Change Language</Text>
          </Pressable>

          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
          <IconsaxIcon Icon={EmojiHappy} color={colors.primary} size={54} />
        </ScrollView>
      </View>
    </View>
  );
};

export default TabHomeScreen;
