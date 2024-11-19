import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NextLink from 'next/link';

import { HEADER_LINKS } from '@/core/constants/ui';

export function MobileMenu() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleItemClick = (label: string) => {
    setOpenItems((prevOpenItems) => ({
      ...prevOpenItems,
      [label]: !prevOpenItems[label],
    }));
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleDrawerToggle}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {HEADER_LINKS.map((link) => (
              <React.Fragment key={link.label}>
                <ListItem
                  component={NextLink}
                  href={link.route}
                  onClick={() => handleItemClick(link.label)}
                >
                  <ListItemText primary={link.label} />
                  {link.children ? (
                    openItems[link.label] ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null}
                </ListItem>
                {link.children && (
                  <Collapse
                    in={openItems[link.label]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {link.children.map((child) => (
                        <ListItem
                          key={child.label}
                          component={NextLink}
                          href={child.route}
                          sx={{ pl: 4 }}
                        >
                          <ListItemText primary={child.label} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
