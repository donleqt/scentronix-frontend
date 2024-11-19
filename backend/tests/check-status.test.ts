import axios from 'axios';

import { checkStatus } from '../check-status';
import { Server } from '../servers';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('checkStatus', () => {
  const server: Server = { url: 'http://example.com', priority: 1 };

  it('should return the server if the status is 200', async () => {
    mockedAxios.get.mockResolvedValue({ status: 200 });

    const result = await checkStatus(server);

    expect(result).toBe(server);
  });

  it('should return the server if the status is 299', async () => {
    mockedAxios.get.mockResolvedValue({ status: 299 });

    const result = await checkStatus(server);

    expect(result).toBe(server);
  });

  it('should throw an error if the status is 300', async () => {
    mockedAxios.get.mockResolvedValue({ status: 300 });

    await expect(checkStatus(server)).rejects.toThrow('Server is offline');
  });

  it('should throw an error if the request fails', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Network Error'));

    await expect(checkStatus(server)).rejects.toThrow('Server is offline');
  });
});
