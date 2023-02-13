/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */
import '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigationProp,
  NavigatorScreenParams,
  Theme,
  DefaultTheme,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootTabParamList = {
  drivers: undefined;
  compareDrivers: undefined;
  home: undefined;
  parts: undefined;
  compareParts: undefined;
};

export type RootStackParamList = {
  root: NavigatorScreenParams<RootTabParamList> | undefined;
  // TODO: Add modals/dialogs/pages
  modal: { paramExample: number };
  notFound: undefined;
  settings: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
