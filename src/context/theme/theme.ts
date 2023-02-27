import { IExtras, defaultExtras } from './extras';
import { IPalette, TPaletteMode, getDefaultPalette } from './palette';
import { IShape, defaultShape } from './shape';
import { ITypography, defaultTypography } from './typography';
import { IZIndex, defaultZIndex } from './zIndex';
import { TShadows, getDefaultShadows } from './shadows';

export interface ITheme {
  palette: IPalette;
  shadows: TShadows;
  typography: ITypography;
  zIndex: IZIndex;
  shape: IShape;
  spacing: (value: number) => number;
  extras: IExtras;
  // transitions: ITransitions;
}

export const createTheme = (mode: TPaletteMode): ITheme => {
  const palette = getDefaultPalette(mode);

  return {
    extras: defaultExtras,
    palette: getDefaultPalette(mode),
    shadows: getDefaultShadows(palette),
    shape: defaultShape,
    spacing: (value) => value * 4,
    typography: defaultTypography(palette),
    zIndex: defaultZIndex,
  };
};
