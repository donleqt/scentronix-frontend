import axios from 'axios';

import { Server } from './servers';

export async function checkStatus(server: Server): Promise<Server> {
  try {
    const response = await axios.get(server.url, { timeout: 5000 });

    if (response.status >= 200 && response.status < 300) {
      return server;
    } else {
      throw new Error('Server is offline');
    }
  } catch {
    throw new Error('Server is offline');
  }
}
