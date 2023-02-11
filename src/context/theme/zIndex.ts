export interface IZIndex {
  drawer: number;
  modal: number;
  tooltip: number;
}

export const defaultZIndex: IZIndex = {
  drawer: 1000,
  modal: 2000,
  tooltip: 3000,
};
