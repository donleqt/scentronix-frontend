import { Box, Container, Grid2, Paper, Typography } from '@mui/material';

const blogPosts = [
  {
    title: 'The Art of Sourdough Bread',
    excerpt: 'Discover the secrets to making perfect sourdough bread at home.',
  },
  {
    title: 'Mastering Italian Cuisine',
    excerpt:
      'Learn the techniques and recipes to cook authentic Italian dishes.',
  },
  {
    title: 'Vegetarian Delights',
    excerpt: 'Explore a variety of delicious and healthy vegetarian recipes.',
  },
];

export default function BlogPage() {
  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to the Blog Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          Here you can find various blog posts on different topics.
        </Typography>
      </Box>
      <Grid2 container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid2 size={{ xs: 12, md: 6 }} key={index}>
            <Paper elevation={3} style={{ padding: '16px' }}>
              <Typography variant="h5" component="h2" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body1">{post.excerpt}</Typography>
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
