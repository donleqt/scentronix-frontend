import { Components } from '@mui/material';

export const MuiButton: Components['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      borderRadius: 0,
    },
    outlined: {
      color: 'black',
    },
  },
};
