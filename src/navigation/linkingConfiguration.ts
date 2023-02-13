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
      modal: 'modal',
      notFound: '*',
      root: {
        screens: {
          compareDrivers: {
            screens: {
              TabCompareDriversScreen: 'compare-drivers',
            },
          },
          compareParts: {
            screens: {
              TabComparePartsScreen: 'compare-parts',
            },
          },
          drivers: {
            screens: {
              TabDriversScreen: 'drivers',
            },
          },
          home: {
            screens: {
              TabHomeScreen: 'home',
            },
          },
          parts: {
            screens: {
              TabPartsScreen: 'parts',
            },
          },
        },
      },
      settings: 'settings',
    },
  },
  prefixes: [Linking.createURL('/')],
};

export default linking;
