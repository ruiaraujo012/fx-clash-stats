import { FlashList } from '@shopify/flash-list';
import { LANGUAGES, normalizeKey } from '../../../../i18n/helpers';
import { ListItem, ModalHeader, Typography } from '../../../../components/ui';
import { Modal, Pressable, View } from 'react-native';
import { TickCircle } from 'iconsax-react-native';
import { generateSettingsListStyles } from '../utils';
import { useState } from 'react';
import { useTheme } from '../../../../context/theme/ThemeContext';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '../../../../lib/IconsaxIcon';
import type { ListRenderItemInfo } from '@shopify/flash-list';
import type { TLanguagesValues } from '../../../../i18n/helpers';

interface IOption {
  label: string;
  value: TLanguagesValues;
}

const ChangeLanguageListItem = () => {
  const { t, i18n } = useTranslation(['settings']);

  const { theme } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const styles = generateSettingsListStyles({ theme });

  /**
   * Methods
   */
  const renderItem = ({ item }: ListRenderItemInfo<IOption>) => (
    <Pressable
      onPress={() => i18n.changeLanguage(item.value)}
      style={({ pressed }) => ({
        ...styles.item,
        backgroundColor: pressed ? theme.palette.action.hover : theme.palette.background.paper,
      })}
    >
      <Typography>{item.label}</Typography>

      {item.value === i18n.language && (
        <View style={[styles.checkIcon]}>
          <IconsaxIcon
            Icon={TickCircle}
            color={theme.palette.primary.main}
            size={22}
          />
        </View>
      )}
    </Pressable>
  );

  /**
   * Render
   */
  return (
    <>
      <ListItem
        label={t('settings:language')}
        onPress={() => setIsModalOpen(true)}
        value={t(normalizeKey(`languages.${i18n.language}`))}
      />

      {/* Modal */}
      <Modal
        animationType='slide'
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
        visible={isModalOpen}
      >
        <ModalHeader
          onPressClose={() => setIsModalOpen(false)}
          title={t('settings:language')}
        />

        <View style={styles.container}>
          <FlashList
            data={Object.values(LANGUAGES).map((value) => ({
              label: t(normalizeKey(`languages.${value}`)),
              value,
            }))}
            estimatedItemSize={2}
            keyExtractor={({ value }) => value}
            renderItem={renderItem}
          />
        </View>
      </Modal>
    </>
  );
};

export default ChangeLanguageListItem;
