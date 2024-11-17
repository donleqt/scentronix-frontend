'use client';

import { createTheme } from '@mui/material/styles';

import * as customComponents from './components';
import { paletteColors } from './colors';

export const theme = createTheme({
  components: {
    ...customComponents,
  },
  palette: paletteColors,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});
