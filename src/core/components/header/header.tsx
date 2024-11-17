'use client';

import { AppBar, Box, Container, Toolbar } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';

import logo from '@/assets/images/logo.png';
import { APP_ROUTES } from '@/core/constants/routes';
import { HEADER_LINKS } from '@/core/constants/ui';
import { RouteLink } from '@/core/types/routing';

import { HeaderSubMenu } from './header-sub-menu';
import { HeaderLink } from './header-link';

const LOGO_SIZE = 150;

export const Header = () => {
  const hideTimeout = useRef<NodeJS.Timeout>();
  const pathname = usePathname();
  const [subMenuLinks, setSubMenuLinks] = useState<RouteLink[]>([]);

  const handleMouseEnter = (links: RouteLink[]) => {
    clearTimeout(hideTimeout.current);
    setSubMenuLinks(links);
  };

  const handleMouseLeave = () => {
    clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setSubMenuLinks([]), 500);
  };

  const handleSubMenuMouseEnter = () => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
  };

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
            {HEADER_LINKS.map((link) => (
              <Box
                key={link.label}
                onMouseEnter={() => handleMouseEnter(link.children ?? [])}
                onMouseLeave={handleMouseLeave}
              >
                <HeaderLink
                  label={link.label}
                  route={link.route}
                  isActive={pathname === link.route}
                />
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>

      <Box
        onMouseEnter={handleSubMenuMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <HeaderSubMenu links={subMenuLinks} marginLeft={LOGO_SIZE + 25} />
      </Box>
    </AppBar>
  );
};
