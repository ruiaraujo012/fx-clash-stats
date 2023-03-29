import { Pressable } from 'react-native';
import { iconButtonStyles } from './utils';
import { useCallback, useMemo } from 'react';
import { useTheme } from '../../../context/theme/ThemeContext';
import IconsaxIcon from '../../../lib/IconsaxIcon';
import type { Icon } from 'iconsax-react-native';
import type { PressableProps, PressableStateCallbackType } from 'react-native';
import type { TIconButtonSize } from './utils';
import type { TPaletteColor } from '../../../context/theme/palette';

interface IIconButtonProps {
  color?: TPaletteColor;
  size?: TIconButtonSize;
}

interface IBaseProps {
  Icon: Icon;
}

type TPressableProps = Omit<PressableProps, 'children' | 'style'>;

type TProps = IBaseProps & IIconButtonProps & TPressableProps;

export const IconButton = (props: TProps) => {
  const { Icon, color = 'primary', size = 'medium', ...other } = props;

  const { theme } = useTheme();

  const handleCreateStyle = useCallback(
    ({ pressed }: PressableStateCallbackType) => {
      const styles = iconButtonStyles({
        color,
        pressed,
        theme,
      });

      return styles.iconButton;
    },
    [color, theme],
  );

  const iconSize = useMemo(() => {
    switch (size) {
      case 'large':
        return 40;

      case 'medium':
        return 25;

      case 'small':
        return 15;

      default:
        return 25;
    }
  }, [size]);

  return (
    <Pressable
      style={handleCreateStyle}
      {...other}
    >
      <IconsaxIcon
        Icon={Icon}
        color={theme.palette[color].main}
        size={iconSize}
      />
    </Pressable>
  );
};

IconButton.displayName = 'IconButton';
