'use client';

import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { HEADER_LINKS } from '@/core/constants/ui';
import { RouteLink } from '@/core/types/routing';

import { HeaderLink } from './header-link';
import { SubMenu } from './sub-menu';
import { isActiveLink } from './is-active-link';

export function NavMenu() {
  const hideTimeout = useRef<NodeJS.Timeout>();
  const pathname = usePathname();
  const [subMenuLinks, setSubMenuLinks] = useState<RouteLink[]>([]);

  const activeLink = useMemo(
    () => HEADER_LINKS.find((link) => isActiveLink(pathname, link.route)),
    [pathname],
  );

  const handleMouseEnter = useCallback((links: RouteLink[]) => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
    setSubMenuLinks(links);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }

    if (activeLink && activeLink.children) {
      setSubMenuLinks(activeLink.children);
    } else {
      hideTimeout.current = setTimeout(() => setSubMenuLinks([]), 500);
    }
  }, [activeLink]);

  const handleSubMenuMouseEnter = useCallback(() => {
    if (hideTimeout.current) {
      clearTimeout(hideTimeout.current);
    }
  }, []);

  useEffect(() => {
    if (activeLink) {
      setSubMenuLinks(activeLink.children ?? []);
    }
  }, [activeLink]);

  return (
    <Box display="flex" flexDirection="column" ml={2} width="100%">
      <Box
        display="flex"
        gap={3}
        flexGrow={1}
        mt={3}
        mx={-2}
        alignItems="center"
      >
        {HEADER_LINKS.map((link) => (
          <Box
            key={link.label}
            onMouseEnter={() => handleMouseEnter(link.children ?? [])}
            onMouseLeave={handleMouseLeave}
          >
            <HeaderLink
              label={link.label}
              route={link.route}
              isActive={activeLink?.route === link.route}
            />
          </Box>
        ))}
      </Box>

      <Box
        onMouseEnter={handleSubMenuMouseEnter}
        onMouseLeave={handleMouseLeave}
        position="relative"
      >
        <Box position="relative" zIndex={1}>
          <SubMenu links={subMenuLinks} />
        </Box>
      </Box>
    </Box>
  );
}

export function NavBackground() {
  return (
    <Box
      sx={(theme) => ({
        background: theme.palette.cultured.main,
        position: 'absolute',
        width: '100vw',
        marginLeft: '-50vw',
        left: '50%',
        top: 70,
        height: 60,
        zIndex: 0,
      })}
    />
  );
}
