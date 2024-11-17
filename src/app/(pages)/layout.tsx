import { Container, CssBaseline } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';

import { Breadcrumbs } from '@/core/components/breadcrumbs/breadcrumbs';
import { Header } from '@/core/components/header/header';
import { theme } from '@/libs/mui/theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container>
          <Breadcrumbs />
        </Container>
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}