import { Box, Container, Grid2, Paper, Typography } from '@mui/material';

export default function LearnPage() {
  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to the Learn Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here you can find various resources to help you learn more about our
          topics.
        </Typography>
      </Box>
      <Grid2 container spacing={4}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Section 1: Introduction
            </Typography>
            <Typography variant="body1">
              This section provides an introduction to the basics.
            </Typography>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Section 2: Advanced Topics
            </Typography>
            <Typography variant="body1">
              Dive deeper into advanced topics and concepts.
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
}
