import { AccessTime } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

type RecipeInfoProps = {
  steps: {
    duration: string;
    name: string;
  }[];
};

export function RecipeInfo({ steps }: RecipeInfoProps) {
  return (
    <Stack direction="row" alignItems="start" spacing={3} my={4}>
      <AccessTime sx={{ fontSize: 40 }} />

      {steps.map((step, index) => (
        <Box key={index}>
          <Typography variant="subtitle2" textTransform="uppercase">
            {step.name}
          </Typography>
          <Typography>{step.duration}</Typography>
        </Box>
      ))}
    </Stack>
  );
}
