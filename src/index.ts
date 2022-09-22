import Request from './client';
import Indices from './api/indices';
import Document from './api/document';
import Search from './api/search';
import Es from './api/es';
import User from './api/user';
import { ZincSearchOptions } from './type';
export default class ZincSearch {
  readonly indices: Indices;
  readonly document: Document;
  readonly search: Search;
  readonly client: Request;
  readonly user: User;
  readonly es: Es;
  constructor(options: ZincSearchOptions) {
    const { url, user, password } = options;
    const client = new Request({ url, user, password });
    this.indices = new Indices(client);
    this.document = new Document(client);
    this.search = new Search(client);
    this.user = new User(client);
    this.es = new Es(client);
    this.client = client;
  }
  /**
   * No description
   *
   * @name Healthz
   * @summary Get healthz
   * @request GET:/healthz
   */
  healthz() {
    return this.client.request({
      path: `/healthz`,
      method: 'GET',
    });
  }
  /**
   * No description
   *
   * @name Version
   * @summary Get version
   * @request GET:/version
   */
  version() {
    return this.client.request({
      path: `/version`,
      method: 'GET',
    });
  }
}
