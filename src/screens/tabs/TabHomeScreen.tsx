import { EmojiHappy } from 'iconsax-react-native';
import { ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import IconsaxIcon from '../../lib/IconsaxIcon';

const TabHomeScreen = () => {
  const { colors } = useTheme();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <ScrollView
          style={
            {
              // marginBottom: 100,
            }
          }
        >
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
