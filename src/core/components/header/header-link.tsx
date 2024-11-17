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
      underline="none"
      sx={(theme) => ({
        px: 2,
        py: 1,
        borderBottom: isActive ? '2px solid' : 'none',
        borderBottomColor: theme.palette.sweethBrown.main,
      })}
    >
      {label}
    </Link>
  );
};
