import { generatePaletteColors } from './utils/generatePaletteColors';

export enum Colors {
  cultured = '#f7d6a0',
  sweetBrown = '#a3373c',
}

export type CustomColors = keyof typeof Colors;

declare module '@mui/material/styles' {
  type CustomPalette = {
    [key in CustomColors]: Palette['primary'];
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Palette extends CustomPalette {}

  type CustomPaletteOptions = {
    [key in CustomColors]: PaletteOptions['primary'];
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface PaletteOptions extends CustomPaletteOptions {}
}

export const paletteColors = generatePaletteColors(Colors);
