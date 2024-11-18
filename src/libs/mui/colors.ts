export enum Colors {
  cultured = '#f8f5f0',
  sweethBrown = '#a3373c',
}

type CustomColors = keyof typeof Colors;

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

export const paletteColors = Object.keys(Colors).reduce(
  (acc, key) => {
    acc[key as CustomColors] = { main: Colors[key as CustomColors] };

    return acc;
  },
  {} as Record<keyof typeof Colors, { main: string }>,
);
