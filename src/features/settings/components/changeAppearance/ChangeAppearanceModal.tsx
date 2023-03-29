import { ListItem, ModalHeader } from '../../../../components/ui';
import { Modal } from 'react-native';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ChangeAppearanceModal = () => {
  const { t } = useTranslation(['settings']);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal
        animationType='slide'
        onRequestClose={() => {
          setIsModalOpen(false);
        }}
        visible={isModalOpen}
      >
        <ModalHeader
          onPressClose={() => setIsModalOpen(false)}
          title=''
        />

        {/* <View style={{ marginTop: Platform.OS === 'android' ? 0 : insets.top }}>
        <Typography>Test</Typography>
      </View> */}
      </Modal>

      <ListItem
        label={t('settings:appearance')}
        onPress={() => setIsModalOpen(true)}
      />
    </>
  );
};

export default ChangeAppearanceModal;
