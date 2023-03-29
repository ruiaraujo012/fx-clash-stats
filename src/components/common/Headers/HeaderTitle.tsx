import { Typography } from '../../ui';
import { View } from 'react-native';
import { normalizeKey } from '../../../i18n/helpers';
import { useTranslation } from 'react-i18next';
import type { TTypographyProps } from '../../ui';
import type { ViewStyle } from 'react-native';

interface IProps {
  title: string;
  style?: ViewStyle;
  typographyProps?: TTypographyProps;
}

const HeaderTitle = (props: IProps) => {
  const { title, style, typographyProps } = props;

  const { t } = useTranslation();

  return (
    <View style={style}>
      {!title.match(/\((.*?)\)/) && !title.match(/\[(.*?)\]/) && (
        <Typography {...typographyProps}>{t(normalizeKey(title))}</Typography>
      )}
    </View>
  );
};

export default HeaderTitle;
