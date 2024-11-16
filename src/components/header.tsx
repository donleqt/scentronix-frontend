import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <Typography variant="h6" component="div">
            🐒 {/* Replace with the actual image or icon */}
          </Typography>
        </Box>
        <Box display="flex" gap={2}>
          <Button className="active">Recipes</Button>
          <Button>Shop</Button>
          <Button>Learn</Button>
          <Button>About</Button>
          <Button>Blog</Button>
        </Box>
      </Toolbar>
      <Toolbar>
        <Box display="flex" justifyContent="center" gap={4} width="100%">
          <Button>Categories</Button>
          <Button>Collections</Button>
          <Button>Resources</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
