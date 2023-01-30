import { Icon, IconProps } from 'iconsax-react-native';

interface IProps {
  Icon: Icon;
}

const IconsaxIcon = (props: IProps & IconProps) => {
  const { Icon, ...other } = props;

  return <Icon size={25} variant='Bulk' {...other} />;
};

export default IconsaxIcon;
