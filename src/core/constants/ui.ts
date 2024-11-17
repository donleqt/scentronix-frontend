import { RouteLink } from '../types/routing';
import { APP_ROUTES } from './routes';

export const HEADER_LINKS: RouteLink[] = [
  { label: 'Shop', route: APP_ROUTES.SHOP },
  {
    label: 'Recipes',
    route: APP_ROUTES.RECIPES,
    children: [
      {
        label: 'Collections',
        route: APP_ROUTES.RECIPE_COLLECTIONS,
      },
      {
        label: 'Categories',
        route: APP_ROUTES.RECIPE_CATEGORIES,
      },
      {
        label: 'Resources',
        route: APP_ROUTES.RECIPE_RESOURCES,
      },
    ],
  },
  { label: 'Learn', route: APP_ROUTES.LEARN },
  { label: 'About', route: APP_ROUTES.ABOUT },
  { label: 'Blog', route: APP_ROUTES.BLOG },
];
