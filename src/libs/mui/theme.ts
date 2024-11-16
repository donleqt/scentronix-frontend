'use client';

import { createTheme } from '@mui/material/styles';

enum Colors {
  PrimaryMain = '#1976d2',
  SecondaryMain = '#dc004e',
}

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.PrimaryMain,
    },
    secondary: {
      main: Colors.SecondaryMain,
    },
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});
