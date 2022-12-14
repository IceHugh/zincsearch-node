import { Pool } from 'undici';
import { ClientOptions } from './type';
export default class Request {
  private readonly options: ClientOptions;
  private client: Pool;
  headers: any;
  constructor(options: ClientOptions) {
    this.options = options;
    const { url, user, password, connections = 10 } = this.options;
    const auth =
      'Basic ' + Buffer.from(user + ':' + password).toString('base64');
    this.headers = { 'Content-type': 'application/json', Authorization: auth };
    this.client = new Pool(url, {
      connections,
    });
  }
  async request<T = any>(options: any): Promise<T> {
    const { headers: defaultOptions } = this;
    const { headers: sourceOptions = {}, Method } = options;
    const headers = Object.assign(defaultOptions, sourceOptions);
    options.headers = headers;

    const { body, statusCode } = await this.client.request(options);
    if (Method == 'HEAD' || Method === 'GET') {
      return (statusCode === 200) as any;
    } else {
      const result = await body.json();
      if (statusCode !== 200) {
        throw new Error(result?.error.toString());
      }
      return result;
    }
  }
}
