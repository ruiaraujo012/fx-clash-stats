import { Icon, IconProps } from 'iconsax-react-native';
interface IIcon {
  Icon: Icon;
}

export type TIconsaxProps = IIcon & IconProps;

const IconsaxIcon = (props: TIconsaxProps) => {
  const { Icon, ...other } = props;

  return <Icon size={25} variant='Bulk' {...other} />;
};

export default IconsaxIcon;
