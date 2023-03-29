import type { IPalette } from './palette';

export type TElevation =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

interface IShadow {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

export type TShadows = {
  [key in TElevation]: IShadow;
};

export const getDefaultShadows = (palette: IPalette): TShadows => {
  const shadowColor = palette.mode === 'light' ? palette.common.black : palette.common.white;

  return {
    '0': {
      elevation: 0,
      shadowColor,
      shadowOffset: {
        height: 0,
        width: 0,
      },
      shadowOpacity: 0,
      shadowRadius: 0,
    },
    '1': {
      elevation: 1,
      shadowColor,
      shadowOffset: {
        height: 1,
        width: 0,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,
    },
    '2': {
      elevation: 2,
      shadowColor,
      shadowOffset: {
        height: 1,
        width: 0,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
    },
    '3': {
      elevation: 3,
      shadowColor,
      shadowOffset: {
        height: 1,
        width: 0,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
    },
    '4': {
      elevation: 4,
      shadowColor,
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
    },
    '5': {
      elevation: 5,
      shadowColor,
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    '6': {
      elevation: 6,
      shadowColor,
      shadowOffset: {
        height: 3,
        width: 0,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
    },
    '7': {
      elevation: 7,
      shadowColor,
      shadowOffset: {
        height: 3,
        width: 0,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
    },
    '8': {
      elevation: 8,
      shadowColor,
      shadowOffset: {
        height: 4,
        width: 0,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
    },
    '9': {
      elevation: 9,
      shadowColor,
      shadowOffset: {
        height: 4,
        width: 0,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
    },
    '10': {
      elevation: 10,
      shadowColor,
      shadowOffset: {
        height: 5,
        width: 0,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
    },
    '11': {
      elevation: 11,
      shadowColor,
      shadowOffset: {
        height: 5,
        width: 0,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
    },
    '12': {
      elevation: 12,
      shadowColor,
      shadowOffset: {
        height: 6,
        width: 0,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
    },
    '13': {
      elevation: 13,
      shadowColor,
      shadowOffset: {
        height: 6,
        width: 0,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,
    },
    '14': {
      elevation: 14,
      shadowColor,
      shadowOffset: {
        height: 7,
        width: 0,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
    },
    '15': {
      elevation: 15,
      shadowColor,
      shadowOffset: {
        height: 7,
        width: 0,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,
    },
    '16': {
      elevation: 16,
      shadowColor,
      shadowOffset: {
        height: 8,
        width: 0,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
    },
    '17': {
      elevation: 17,
      shadowColor,
      shadowOffset: {
        height: 8,
        width: 0,
      },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,
    },
    '18': {
      elevation: 18,
      shadowColor,
      shadowOffset: {
        height: 9,
        width: 0,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,
    },
    '19': {
      elevation: 19,
      shadowColor,
      shadowOffset: {
        height: 9,
        width: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 12.35,
    },
    '20': {
      elevation: 20,
      shadowColor,
      shadowOffset: {
        height: 10,
        width: 0,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,
    },
    '21': {
      elevation: 21,
      shadowColor,
      shadowOffset: {
        height: 10,
        width: 0,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,
    },
    '22': {
      elevation: 22,
      shadowColor,
      shadowOffset: {
        height: 11,
        width: 0,
      },
      shadowOpacity: 0.55,
      shadowRadius: 14.78,
    },
    '23': {
      elevation: 23,
      shadowColor,
      shadowOffset: {
        height: 11,
        width: 0,
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,
    },
    '24': {
      elevation: 24,
      shadowColor,
      shadowOffset: {
        height: 12,
        width: 0,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,
    },
  };
};
