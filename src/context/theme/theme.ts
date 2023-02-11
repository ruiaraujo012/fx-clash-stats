import { IPalette, TPaletteMode, getDefaultPalette } from './palette';
import { IShape, defaultShape } from './shape';
import { ITypography, defaultTypography } from './typography';
import { IZIndex, defaultZIndex } from './zIndex';

export interface ITheme {
  palette: IPalette;
  // TODO: Add shadows
  // shadows: IShadows;
  // transitions: ITransitions;
  typography: ITypography;
  zIndex: IZIndex;
  shape: IShape;
  spacing: (value: number) => number;
}

export const createTheme = (mode: TPaletteMode): ITheme => {
  const palette = getDefaultPalette(mode);

  return {
    palette: getDefaultPalette(mode),
    shape: defaultShape,
    spacing: (value) => value * 4,
    typography: defaultTypography(palette),
    zIndex: defaultZIndex,
  };
};
