import { checkStatus } from './check-status';
import { Server, servers } from './servers';

export async function findServer(): Promise<Server> {
  const checkPromises = servers.map((server) =>
    checkStatus(server).catch(() => null),
  );

  const results = await Promise.all<Server | null>(checkPromises);
  const onlineServers = results.filter((server) => server !== null);

  if (onlineServers.length === 0) {
    throw new Error('No servers are online');
  }

  onlineServers.sort((a, b) => a.priority - b.priority);

  return onlineServers[0];
}
