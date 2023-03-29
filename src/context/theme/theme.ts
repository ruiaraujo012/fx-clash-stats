import { defaultExtras } from './extras';
import { defaultShape } from './shape';
import { defaultTypography } from './typography';
import { defaultZIndex } from './zIndex';
import { getDefaultPalette } from './palette';
import { getDefaultShadows } from './shadows';
import type { IExtras} from './extras';
import type { IPalette, TPaletteMode} from './palette';
import type { IShape} from './shape';
import type { ITypography} from './typography';
import type { IZIndex} from './zIndex';
import type { TShadows} from './shadows';

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
