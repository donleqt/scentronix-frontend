import { Box, Link } from '@mui/material';
import NextLink from 'next/link';

import { RouteLink } from '@/core/types/routing';

type SubMenuMenuProps = {
  links: RouteLink[];
};

export function SubMenu({ links }: SubMenuMenuProps) {
  return (
    <Box gap={3} display="flex" mt={5}>
      {links.map((link) => (
        <Link
          display="block"
          href={link.route}
          component={NextLink}
          key={link.label}
          color="inherit"
          sx={(theme) => ({
            '&:hover': {
              color: theme.palette.primary.main,
              textDecoration: 'underline',
            },
          })}
        >
          {link.label}
        </Link>
      ))}
    </Box>
  );
}
