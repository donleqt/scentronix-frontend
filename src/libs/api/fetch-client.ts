import createFetchClient from 'openapi-fetch';

import { paths } from './generated';

export const fetchClient = createFetchClient<paths>({
  baseUrl: `${process.env.NEXT_PUBLIC_HOST}/api`,
});
