import { Container, Typography, Box } from '@mui/material';

export default function CollectionsPage() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Collections
        </Typography>
        <Typography variant="body1">
          This is the Collections page. Content will be added here.
        </Typography>
      </Box>
    </Container>
  );
}
