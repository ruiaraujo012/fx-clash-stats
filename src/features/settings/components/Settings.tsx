import { List } from '../../../components/ui';
import ChangeAppearanceListItem from './changeAppearance/ChangeAppearanceListItem';
import ChangeLanguageListItem from './changeLanguage/ChangeLanguageListItem';
import React from 'react';

export const Settings = () => (
  <List>
    <ChangeLanguageListItem />
    <ChangeAppearanceListItem />
  </List>
);
