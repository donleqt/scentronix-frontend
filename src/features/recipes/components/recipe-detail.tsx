import { Box, Button, Grid2, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { Add, Cake, Print } from '@mui/icons-material';

import { Schema } from '@/libs/api/schema';

import { RecipeInfo } from './recipe-info';

type RecipeDetailProps = {
  recipe: Schema['Recipe'];
};

export function RecipeDetail({ recipe }: RecipeDetailProps) {
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

        <Box display="flex" alignItems="flex-start" mt={4}>
          {/* Yield */}
          <Box mb={2} display="flex">
            <Typography mr={2}>
              <Cake fontSize="large" />
            </Typography>

            <Box display="flex" flexDirection="column">
              <Typography variant="subtitle2">YIELD</Typography>
              <Typography>{recipe.yield}</Typography>
            </Box>
          </Box>

          {/* Buttons */}
          <Stack
            ml="auto"
            direction="row"
            justifyContent="flex-end"
            spacing={2}
          >
            <Button variant="outlined" startIcon={<Add />}>
              Save Recipe
            </Button>
            <Button variant="outlined" startIcon={<Print />}>
              Print
            </Button>
          </Stack>
        </Box>
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
