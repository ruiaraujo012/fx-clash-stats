import { Back } from 'iconsax-react-native';
import { Button } from '../../ui';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import type { ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

interface IProps {
  show: boolean;
  onPress: () => void;
  style?: ViewStyle;
}

const HeaderBackButton = (props: IProps) => {
  const { show, onPress, style } = props;

  const { t } = useTranslation();

  return (
    <View style={[styles.container, style]}>
      {show && (
        <Button
          StartIcon={Back}
          onPress={onPress}
          size='small'
          variant='text'
        >
          {t('back')}
        </Button>
      )}
    </View>
  );
};

export default HeaderBackButton;
