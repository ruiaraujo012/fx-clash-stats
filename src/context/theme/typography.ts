import { IPalette } from './palette';
import { TextStyle } from 'react-native';

export type TTypographyStyle = TextStyle;

export type TVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline';

export type TFontStyle = Required<{
  fontFamily: TextStyle['fontFamily'];
  fontSize: number;
}>;

export interface ITypography extends Record<TVariant, TTypographyStyle>, TFontStyle {}

export const defaultTypography = (palette: IPalette): ITypography => {
  return {
    body1: {
      color: palette.text.primary,
      fontFamily: 'Poppins',
      fontSize: 16,
      letterSpacing: 1.0938,
    },
    body2: {
      color: palette.text.primary,
      fontFamily: 'Poppins',
      fontSize: 15,
      letterSpacing: 1.1071,
    },
    button: {
      color: palette.text.primary,
      fontFamily: 'Poppins-Bold',
      fontSize: 16,
      letterSpacing: 1.2857,
      textTransform: 'capitalize',
    },
    caption: {
      color: palette.text.primary,
      fontFamily: 'Poppins',
      fontSize: 14,
      letterSpacing: 1.3333,
      textTransform: 'capitalize',
    },
    fontFamily: 'Poppins',
    fontSize: 16,
    h1: {
      color: palette.text.primary,
      fontFamily: 'Poppins',
      fontSize: 70,
      letterSpacing: -1.1562,
    },
    h2: {
      color: palette.text.primary,
      fontFamily: 'Poppins',
      fontSize: 60,
      letterSpacing: -1.0833,
    },
    h3: {
      color: palette.text.primary,
      fontFamily: 'Poppins',
      fontSize: 50,
      letterSpacing: 1,
    },
    h4: {
      color: palette.text.primary,
      fontFamily: 'Poppins',
      fontSize: 40,
      letterSpacing: 1.0735,
    },
    h5: {
      color: palette.text.primary,
      fontFamily: 'Poppins',
      fontSize: 30,
      letterSpacing: 1,
    },
    h6: {
      color: palette.text.primary,
      fontFamily: 'Poppins',
      fontSize: 20,
      letterSpacing: 1.075,
    },
    overline: {
      color: palette.text.primary,
      fontFamily: 'Poppins',
      fontSize: 14,
      letterSpacing: 1.8333,
      textTransform: 'uppercase',
    },
    subtitle1: {
      color: palette.text.primary,
      fontFamily: 'Poppins',
      fontSize: 16,
      letterSpacing: 1.0938,
    },
    subtitle2: {
      color: palette.text.primary,
      fontFamily: 'Poppins-Bold',
      fontSize: 14,
      letterSpacing: 1.0714,
    },
  };
};
