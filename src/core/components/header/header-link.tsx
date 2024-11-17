'use client';

import { Link } from '@mui/material';
import NextLink from 'next/link';

type HeaderLinkProps = {
  isActive: boolean;
  label: string;
  route: string;
};

export const HeaderLink = ({ label, route, isActive }: HeaderLinkProps) => {
  return (
    <Link
      color="inherit"
      component={NextLink}
      href={route}
      underline="hover"
      sx={(theme) => ({
        px: 2,
        py: 1,
        fontWeight: 400,
        textDecoration: 'underline',
        textUnderlineOffset: theme.spacing(1.5),
        textDecorationThickness: '2px',
        textDecorationColor: isActive
          ? theme.palette.sweethBrown.main
          : 'transparent',
        '&:hover': {
          textDecorationColor: theme.palette.sweethBrown.dark,
          textDecorationThickness: '2px',
        },
      })}
    >
      {label}
    </Link>
  );
};
