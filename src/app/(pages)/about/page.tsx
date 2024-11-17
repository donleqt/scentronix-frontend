import { Container, Typography, Box } from '@mui/material';

export default function AboutPage() {
  return (
    <Container>
      <Box my={4} textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>

        <Typography variant="body1" component="p">
          Welcome to the About Page of Recipes Shop. We are dedicated to
          providing the best recipes and culinary tips to help you create
          delicious meals at home. Our team of experienced chefs and culinary
          experts work tirelessly to bring you a wide variety of recipes that
          cater to all tastes and dietary preferences. Whether you are a
          beginner or a seasoned cook, you will find something to inspire you in
          our collection. We believe that cooking should be fun and accessible
          to everyone, and we are here to support you every step of the way.
          Thank you for visiting our page, and happy cooking!
        </Typography>
      </Box>
    </Container>
  );
}
