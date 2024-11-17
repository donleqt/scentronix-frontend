import { Container, Typography, Box, Button } from '@mui/material';
import NextLink from 'next/link';

export default function HomePage() {
  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to the Home Page
        </Typography>
        <NextLink href="/recipes" passHref>
          <Button variant="contained" color="primary">
            Go to Recipes
          </Button>
        </NextLink>
      </Box>
    </Container>
  );
}
