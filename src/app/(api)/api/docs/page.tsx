import { ReactSwagger } from '@/libs/swagger/react-swagger';

import swagger from './swagger.json';

export default async function ApiDocsPage() {
  return <ReactSwagger spec={swagger} />;
}
