import { AppBar, Box, Container } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';

import logo from '@/assets/images/logo.png';
import { APP_ROUTES } from '@/core/constants/routes';
import { Colors } from '@/libs/mui/colors';

import { NavBackground, NavMenu } from '../nav-menu/nav-menu';

const LOGO_SIZE = 150;

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: { xs: Colors.cultured, md: 'white' },
        color: 'MenuText',
        boxShadow: { xs: 4, md: 0 },
      }}
    >
      <NavBackground />
      <Container>
        <Box
          py={1}
          sx={{
            py: 1,
            display: 'flex',
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Box position="relative" zIndex={1}>
            <NextLink href={APP_ROUTES.HOME} passHref>
              <Image
                src={logo}
                alt="logo"
                width={LOGO_SIZE}
                style={{ width: '100%', maxWidth: LOGO_SIZE, height: 'auto' }}
                sizes={`(max-width: 960px) ${LOGO_SIZE / 2}px, ${LOGO_SIZE}px`}
              />
            </NextLink>
          </Box>

          <NavMenu />
        </Box>
      </Container>
    </AppBar>
  );
};
