import { APP_ROUTES } from '@/core/constants/routes';

export const isActiveLink = (pathname: string, route: string) => {
  if (route === APP_ROUTES.HOME) {
    return pathname === route;
  }

  return pathname.includes(route);
};
