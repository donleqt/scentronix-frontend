import { Container, Typography, Box } from '@mui/material';

export default function ResourcesPage() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Resources
        </Typography>
        <Typography variant="body1">
          This is the Resources page. Content will be added here.
        </Typography>
      </Box>
    </Container>
  );
}
