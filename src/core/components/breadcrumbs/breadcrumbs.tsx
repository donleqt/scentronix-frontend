'use client';

import NextLink from 'next/link';
import {
  Link as MuiLink,
  Breadcrumbs as MuiBreadcrumbs,
  Typography,
} from '@mui/material';

import { useBreadcrumbsPath } from './useBreadcrumbsPath';

export function Breadcrumbs() {
  const items = useBreadcrumbsPath();

  return (
    <MuiBreadcrumbs sx={{ my: 3 }} aria-label="breadcrumb">
      {items.map((item, index) =>
        item.href ? (
          <MuiLink
            key={index}
            underline="hover"
            color="inherit"
            href={item.href}
            component={NextLink}
          >
            {item.label}
          </MuiLink>
        ) : (
          <Typography key={index} sx={{ color: 'text.primary' }}>
            {item.label}
          </Typography>
        ),
      )}
    </MuiBreadcrumbs>
  );
}
