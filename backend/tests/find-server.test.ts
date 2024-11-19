import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { findServer } from '../find-server';

describe('findServer', () => {
  let mock: MockAdapter;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should return the online server with the lowest priority', async () => {
    mock.onGet('https://does-not-work.perfume.new').timeout();
    mock.onGet('https://gitlab.com').reply(200);
    mock.onGet('http://app.scnt.me').reply(200);
    mock.onGet('https://offline.scentronix.com').timeout();

    const server = await findServer();
    expect(server.url).toBe('http://app.scnt.me');
  });

  it('should throw an error if no servers are online', async () => {
    mock.onGet('https://does-not-work.perfume.new').timeout();
    mock.onGet('https://gitlab.com').timeout();
    mock.onGet('http://app.scnt.me').timeout();
    mock.onGet('https://offline.scentronix.com').timeout();

    await expect(findServer()).rejects.toThrow('No servers are online');
  });
});
