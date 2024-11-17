import { Box, Button, Grid2, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import { Schema } from '@/libs/api/schema';

import { RecipeInfo } from './recipe-info';

type RecipeDetailProps = {
  recipe: Schema['Recipe'];
};

export function RecipeDetail({ recipe }: RecipeDetailProps) {
  console.log(recipe);
  return (
    <Grid2 container spacing={4}>
      {/* Left Column */}
      <Grid2 size={{ xs: 12, md: 6 }}>
        {/* Title */}
        <Typography variant="h3" component="h1" gutterBottom>
          {recipe.title}
        </Typography>

        {/* Description */}
        <Typography variant="body1" component="p">
          {recipe.description}
        </Typography>

        <RecipeInfo />

        {/* Yield */}
        <Box mb={2}>
          <Typography variant="subtitle2">YIELD</Typography>
          <Typography>{recipe.yield}</Typography>
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
        <Box position="relative" width="100%" height={0} paddingTop="75%">
          <Image
            src={recipe.imageUrl}
            alt={recipe.title}
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </Grid2>
    </Grid2>
  );
}
