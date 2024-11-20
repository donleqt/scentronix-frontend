'use client';

import { Link } from '@mui/material';
import NextLink from 'next/link';

type NavLinkProps = {
  isActive: boolean;
  label: string;
  route: string;
};

export const NavLink = ({ label, route, isActive }: NavLinkProps) => {
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
          ? theme.palette.sweetBrown.main
          : 'transparent',
        '&:hover': {
          textDecorationColor: theme.palette.sweetBrown.dark,
          textDecorationThickness: '2px',
        },
      })}
    >
      {label}
    </Link>
  );
};
