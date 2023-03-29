import { ArrowRight2 } from 'iconsax-react-native';
import { Pressable, View } from 'react-native';
import { Typography } from '../../typography/Typography';
import { createListItemStyles } from './utils';
import { useTheme } from '../../../../context/theme/ThemeContext';
import IconsaxIcon from '../../../../lib/IconsaxIcon';
import type { PressableProps, ViewProps } from 'react-native';
import type { TIconsaxProps } from '../../../../lib/IconsaxIcon';
import type { TTypographyProps } from '../../typography/Typography';

export interface IListItemProps {
  label: string;
  onPress: () => void;
  value?: string | number;
  // Other
  pressableProps?: Omit<PressableProps, 'onPress'>;
  typographyProps?: TTypographyProps;
  rightContainerProps?: ViewProps;
  valueProps?: TTypographyProps;
  iconProps?: TIconsaxProps;
}

export const ListItem = (props: IListItemProps) => {
  const {
    pressableProps,
    typographyProps,
    rightContainerProps = { style: {} },
    iconProps = { Icon: ArrowRight2 },
    valueProps = { style: {} },
    onPress,
    label,
    value,
  } = props;

  const { style: rightContainerStyle, ...otherRightContainerProps } = rightContainerProps;
  const { Icon, ...otherIconProps } = iconProps;
  const { style: valueStyle, ...otherValueProps } = valueProps;

  const { theme } = useTheme();
  const styles = createListItemStyles({ theme });

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => createListItemStyles({ pressed, theme }).container}
      {...pressableProps}
    >
      <Typography {...typographyProps}>{label}</Typography>

      <View
        style={[styles.rightContainer, rightContainerStyle]}
        {...otherRightContainerProps}
      >
        {value && (
          <Typography
            style={[styles.value, valueStyle]}
            {...otherValueProps}
          >
            {value}
          </Typography>
        )}

        <IconsaxIcon
          Icon={Icon}
          color={theme.palette.secondary.main}
          {...otherIconProps}
        />
      </View>
    </Pressable>
  );
};
