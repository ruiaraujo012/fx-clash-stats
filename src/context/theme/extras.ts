import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

interface IWindowSize {
  height: number;
  width: number;
}

export interface IExtras {
  isSmallDevice: boolean;
  windowSize: IWindowSize;
}

export const defaultExtras: IExtras = {
  isSmallDevice: width < 375,
  windowSize: {
    height,
    width,
  },
};
