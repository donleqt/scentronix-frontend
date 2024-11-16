import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import React from 'react';

export const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container>
        <Toolbar>
          <Box display="flex" alignItems="center" flexGrow={1}>
            <OutdoorGrillIcon color="primary" fontSize="large" />
          </Box>
          <Box display="flex" gap={2}>
            <Button className="active">Recipes</Button>
            <Button>Shop</Button>
            <Button>Learn</Button>
            <Button>About</Button>
            <Button>Blog</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
