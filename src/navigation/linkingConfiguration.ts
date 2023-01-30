/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from 'expo-linking';
import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

const linking: LinkingOptions<RootStackParamList> = {
  config: {
    screens: {
      Modal: 'modal',
      NotFound: '*',
      Root: {
        screens: {
          CompareDrivers: {
            screens: {
              TabCompareDriversScreen: 'compare-drivers',
            },
          },
          CompareParts: {
            screens: {
              TabComparePartsScreen: 'compare-parts',
            },
          },
          Drivers: {
            screens: {
              TabDriversScreen: 'drivers',
            },
          },
          Home: {
            screens: {
              TabHomeScreen: 'home',
            },
          },
          Parts: {
            screens: {
              TabPartsScreen: 'parts',
            },
          },
        },
      },
    },
  },
  prefixes: [Linking.createURL('/')],
};

export default linking;
