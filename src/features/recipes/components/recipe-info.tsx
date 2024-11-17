import { AccessTime } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

export function RecipeInfo() {
  return (
    <Stack direction="row" alignItems="start" spacing={3} mt={2} mb={3}>
      <AccessTime sx={{ fontSize: 40 }} />

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
  );
}
