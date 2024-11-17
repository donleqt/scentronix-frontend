import { Link, Breadcrumbs, Typography } from '@mui/material';

export function AppBreadcrumbs() {
  return (
    <Breadcrumbs sx={{ mt: 3 }} aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        MUI
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/material-ui/getting-started/installation/"
      >
        Core
      </Link>
      <Typography sx={{ color: 'text.primary' }}>Breadcrumbs</Typography>
    </Breadcrumbs>
  );
}
