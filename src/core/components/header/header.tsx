'use client';

import { AppBar, Box, Container, Toolbar } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

import logo from '@/assets/images/logo.png';
import { APP_ROUTES } from '@/core/constants/routing';
import { HEADER_LINKS } from '@/core/constants/ui';
import { RouteLink } from '@/core/types/routing';

import { HeaderSubMenu } from './header-sub-menu';
import { HeaderLink } from './header-link';

const LOGO_SIZE = 150;

const childLinks: RouteLink[] = [
  { label: 'Categories', route: '/categories' },
  { label: 'Collections', route: '/collections' },
  { label: 'Resources', route: '/resources' },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'white', color: 'MenuText', boxShadow: 'none' }}
    >
      <Container>
        <Toolbar>
          <Box display="flex" alignItems="center" height={0.6 * LOGO_SIZE}>
            <Box sx={{ transform: 'translateY(1.5rem)' }}>
              <NextLink href={APP_ROUTES.HOME} passHref>
                <Image
                  src={logo}
                  alt="logo"
                  width={LOGO_SIZE}
                  height={LOGO_SIZE}
                />
              </NextLink>
            </Box>
          </Box>
          <Box display="flex" gap={3} flexGrow={1} ml={2}>
            {HEADER_LINKS.map((item) => (
              <HeaderLink
                key={item.label}
                label={item.label}
                route={item.route}
                isActive={pathname === item.route}
              />
            ))}
          </Box>
        </Toolbar>
      </Container>

      <HeaderSubMenu links={childLinks} marginLeft={LOGO_SIZE + 25} />
    </AppBar>
  );
};
