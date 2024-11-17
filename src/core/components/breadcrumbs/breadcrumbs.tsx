'use client';

import { Link, Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';

import { useBreadcrumbsPath } from './useBreadcrumbsPath';

export function Breadcrumbs() {
  const items = useBreadcrumbsPath();

  return (
    <MuiBreadcrumbs sx={{ mt: 3 }} aria-label="breadcrumb">
      {items.map((item, index) =>
        item.href ? (
          <Link key={index} underline="hover" color="inherit" href={item.href}>
            {item.label}
          </Link>
        ) : (
          <Typography key={index} sx={{ color: 'text.primary' }}>
            {item.label}
          </Typography>
        ),
      )}
    </MuiBreadcrumbs>
  );
}
