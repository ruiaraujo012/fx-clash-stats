import { List, ListItem } from '../../../components/ui';
import { useTranslation } from 'react-i18next';
import ChangeAppearanceModal from './changeAppearance/ChangeAppearanceModal';
import React from 'react';

export const Settings = () => {
  const { t } = useTranslation(['settings']);

  return (
    <List>
      <ListItem label={t('settings:language')} onPress={() => console.log('press language')} />
      <ChangeAppearanceModal />
    </List>
  );
};
