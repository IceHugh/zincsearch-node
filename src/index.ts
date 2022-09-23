import Request from './client';
import Indices from './api/indices';
import Document from './api/document';
import Es from './api/es';
import User from './api/user';
import { ZincSearchOptions, V1Search, MetaSearchResponse} from './type';
export * from './type';
export default class ZincSearch {
  readonly indices: Indices;
  readonly document: Document;
  readonly client: Request;
  readonly user: User;
  readonly es: Es;
  constructor(options: ZincSearchOptions) {
    const { url, user, password } = options;
    const client = new Request({ url, user, password });
    this.indices = new Indices(client);
    this.document = new Document(client);
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
  /**
   * No description
   *
   * @tags Search
   * @name SearchV1
   * @summary Search V1
   * @request POST:/api/{index}/_search
   */
   search(params: V1Search) {
    const { index, ...data } = params;
    return this.client.request<MetaSearchResponse>({
      path: `/api/${index}/_search`,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}
