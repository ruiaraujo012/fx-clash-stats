import { FlashList } from '@shopify/flash-list';
import { ListItem, ModalHeader, Typography } from '../../../../components/ui';
import { Modal, Pressable, View } from 'react-native';
import { TickCircle } from 'iconsax-react-native';
import { generateSettingsListStyles } from '../utils';
import { normalizeKey } from '../../../../i18n/helpers';
import { useSettings } from '../../context/SettingsContext';
import { useState } from 'react';
import { useTheme } from '../../../../context/theme/ThemeContext';
import { useTranslation } from 'react-i18next';
import IconsaxIcon from '../../../../lib/IconsaxIcon';
import type { ISettings } from '../../context/SettingsContext';
import type { ListRenderItemInfo } from '@shopify/flash-list';

interface IOption {
  label: string;
  value: ISettings['themeMode'];
}

const ChangeAppearanceListItem = () => {
  const { t } = useTranslation(['settings']);

  const { settings, dispatch } = useSettings();
  const { theme } = useTheme();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const styles = generateSettingsListStyles({ theme });

  const OPTIONS: IOption[] = [
    {
      label: t('system'),
      value: 'system',
    },
    {
      label: t('light'),
      value: 'light',
    },
    {
      label: t('dark'),
      value: 'dark',
    },
  ];

  /**
   * Methods
   */
  const renderItem = ({ item }: ListRenderItemInfo<IOption>) => (
    <Pressable
      onPress={() =>
        dispatch({
          payload: item.value,
          type: 'change_theme_mode',
        })
      }
      style={({ pressed }) => ({
        ...styles.item,
        backgroundColor: pressed ? theme.palette.action.hover : theme.palette.background.paper,
      })}
    >
      <Typography>{item.label}</Typography>

      {item.value === settings.themeMode && (
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
        label={t('settings:appearance')}
        onPress={() => setIsModalOpen(true)}
        value={t(normalizeKey(settings.themeMode))}
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
          title={t('settings:appearance')}
        />

        <View style={styles.container}>
          <FlashList
            data={OPTIONS}
            estimatedItemSize={3}
            keyExtractor={({ value }) => value}
            renderItem={renderItem}
          />
        </View>
      </Modal>
    </>
  );
};

export default ChangeAppearanceListItem;
