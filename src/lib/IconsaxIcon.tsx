import { Icon, IconProps } from 'iconsax-react-native';

interface IProps {
  Icon: Icon;
}

const IconsaxIcon = (props: IProps & IconProps) => {
  const { Icon, ...other } = props;

  return <Icon size={20} variant='Bulk' {...other} />;
};

export default IconsaxIcon;
