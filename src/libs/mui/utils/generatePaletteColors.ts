import { Colors, CustomColors } from '../colors';

export const generatePaletteColors = (colors: typeof Colors) => {
  return Object.keys(colors).reduce(
    (acc, key) => {
      acc[key as CustomColors] = { main: colors[key as CustomColors] };
      return acc;
    },
    {} as Record<keyof typeof Colors, { main: string }>,
  );
};
