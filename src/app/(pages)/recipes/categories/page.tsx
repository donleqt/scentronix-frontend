import { Container, Typography, Box } from '@mui/material';

export default function CategoriesPage() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Categories
        </Typography>
        <Typography variant="body1">
          This is the Categories page. Content will be added here.
        </Typography>
      </Box>
    </Container>
  );
}
