import React from 'react';
import { Box, Typography, Button, Grid, Stack, Container } from '@mui/material';
import Image from 'next/image';

import breadImage from '../assets/images/bread.jpg';

export default function RecipeDetail() {
  return (
    <Container sx={{ mt: 4 }}>
      <Box>
        <Grid container spacing={4}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            {/* Title */}
            <Typography variant="h3" component="h1" gutterBottom>
              Whole-Grain Banana Bread
            </Typography>

            {/* Description */}
            <Typography variant="body1" paragraph>
              This one-bowl banana bread — our 2018 Recipe of the Year — uses
              the simplest ingredients but is incredibly moist and flavorful.
              While the recipe calls for a 50/50 mix of flours (all-purpose and
              whole wheat), we often make the bread 100% whole wheat, and
              honestly? No one can tell, it&apos;s that good! And not only is
              this bread delicious — it&apos;s versatile.
            </Typography>

            {/* Recipe Info */}
            <Stack direction="row" spacing={3} mt={2} mb={3}>
              <Box>
                <Typography variant="subtitle2">PREP</Typography>
                <Typography>10 mins</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2">BAKE</Typography>
                <Typography>1 hr to 1 hr 15 mins</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle2">TOTAL</Typography>
                <Typography>1 hr 10 mins</Typography>
              </Box>
            </Stack>

            {/* Yield */}
            <Box mb={2}>
              <Typography variant="subtitle2">YIELD</Typography>
              <Typography>1 loaf, 12 generous servings</Typography>
            </Box>

            {/* Buttons */}
            <Stack direction="row" justifyContent="flex-end" spacing={2}>
              <Button variant="outlined" color="secondary">
                Save Recipe
              </Button>
              <Button variant="outlined" color="secondary">
                Print
              </Button>
            </Stack>
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <Box>
              <Image
                src={breadImage}
                alt="Whole-Grain Banana Bread"
                layout="responsive"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
