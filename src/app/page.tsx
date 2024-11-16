import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid2,
  Stack,
  Container,
} from '@mui/material';
import Image from 'next/image';

import { RecipeInfo } from '@/components/recipe-info';

import breadImage from '../assets/images/bread.jpg';

export default function RecipeDetail() {
  return (
    <Container sx={{ mt: 4 }}>
      <Box>
        <Grid2 container spacing={4}>
          {/* Left Column */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            {/* Title */}
            <Typography variant="h3" component="h1" gutterBottom>
              Whole-Grain Banana Bread
            </Typography>

            {/* Description */}
            <Typography variant="body1" component="p">
              This one-bowl banana bread — our 2018 Recipe of the Year — uses
              the simplest ingredients but is incredibly moist and flavorful.
              While the recipe calls for a 50/50 mix of flours (all-purpose and
              whole wheat), we often make the bread 100% whole wheat, and
              honestly? No one can tell, it&apos;s that good! And not only is
              this bread delicious — it&apos;s versatile.
            </Typography>

            <RecipeInfo />

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
          </Grid2>

          {/* Right Column */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box>
              <Image
                src={breadImage}
                alt="Whole-Grain Banana Bread"
                layout="responsive"
              />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
}
