export const generatePaletteColors = <T extends Record<string, string>>(
  colors: T,
) => {
  return Object.keys(colors).reduce(
    (acc, key) => {
      acc[key as keyof T] = { main: colors[key as keyof T] };
      return acc;
    },
    {} as Record<keyof T, { main: string }>,
  );
};
