import { EmojiHappy } from 'iconsax-react-native';
import { View } from 'react-native';
import IconsaxIcon from '../../lib/IconsaxIcon';

const TabHomeScreen = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
        <IconsaxIcon Icon={EmojiHappy} color='#f00' size={54} />
      </View>
    </View>
  );
};

export default TabHomeScreen;
