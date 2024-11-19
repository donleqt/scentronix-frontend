import { AppBar, Box, Container } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

import logo from '@/assets/images/logo.png';
import { APP_ROUTES } from '@/core/constants/routes';

import { NavBackground, NavMenu } from '../nav-menu/nav-menu';

const LOGO_SIZE = 150;

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'white', color: 'MenuText', boxShadow: 'none' }}
    >
      <NavBackground />
      <Container>
        <Box display="flex" alignItems="flex-start">
          <Box position="relative" zIndex={1}>
            <NextLink href={APP_ROUTES.HOME} passHref>
              <Image
                src={logo}
                alt="logo"
                width={LOGO_SIZE}
                height={LOGO_SIZE}
              />
            </NextLink>
          </Box>

          <NavMenu />
        </Box>
      </Container>
    </AppBar>
  );
};
