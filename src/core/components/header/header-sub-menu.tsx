import { Box, Container, Link, Toolbar, Fade } from '@mui/material';
import NextLink from 'next/link';

import { RouteLink } from '@/core/types/routing';

type HeaderSubMenuProps = {
  marginLeft: number;
  links: RouteLink[];
};

export function HeaderSubMenu({ links, marginLeft }: HeaderSubMenuProps) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.cultured.main,
      })}
    >
      <Container>
        <Toolbar>
          <Fade in={links.length > 0} timeout={200}>
            <Box ml={`${marginLeft}px`} gap={3} display="flex">
              {links.map((link) => (
                <Link
                  href={link.route}
                  component={NextLink}
                  key={link.label}
                  color="inherit"
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Fade>
        </Toolbar>
      </Container>
    </Box>
  );
}
