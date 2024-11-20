import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { checkStatus } from '../check-status';
import { Server } from '../servers';

jest.setTimeout(5100);

describe('checkStatus', () => {
  const server: Server = { url: 'http://example.com', priority: 1 };
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should return the server if the status is 200', async () => {
    mock.onGet(server.url).reply(200);

    const result = await checkStatus(server);

    expect(result).toBe(server);
  });

  it('should return the server if the status is 299', async () => {
    mock.onGet(server.url).reply(299);

    const result = await checkStatus(server);

    expect(result).toBe(server);
  });

  it('should throw an error if the status is 300', async () => {
    mock.onGet(server.url).reply(300);

    await expect(checkStatus(server)).rejects.toThrow('Server is offline');
  });

  it('should throw an error if the request fails', async () => {
    mock.onGet(server.url).networkError();

    await expect(checkStatus(server)).rejects.toThrow('Server is offline');
  });

  it('should throw an error if timeout after 5000ms', async () => {
    mock.onGet(server.url).timeout();

    await expect(checkStatus(server)).rejects.toThrow('Server is offline');
  });
});
