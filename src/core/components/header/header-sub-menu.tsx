import { Box, Container, Link, Toolbar } from '@mui/material';
import NextLink from 'next/link';

type HeaderSubMenuProps = {
  marginLeft: number;
  links: {
    label: string;
    route: string;
  }[];
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
        </Toolbar>
      </Container>
    </Box>
  );
}
