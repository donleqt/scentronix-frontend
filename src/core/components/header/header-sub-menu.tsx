import { Box, Button, Container, Toolbar } from '@mui/material';

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
              <Button key={link.label} color="inherit" href="/">
                {link.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}
