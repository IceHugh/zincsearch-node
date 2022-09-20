import Request from './client';
import Indices from './api/indices';
import Document from './api/document';
import Search from './api/search';

export interface ZincSearchOptions {
  url: string;
  user: string;
  password: string;
}

export default class ZincSearch {
  readonly indices: Indices;
  readonly document: Document;
  readonly search: Search;
  readonly client: Request;
  constructor(options: ZincSearchOptions) {
    const { url, user, password } = options;
    const client = new Request({ url, user, password });
    this.indices = new Indices(client);
    this.document = new Document(client);
    this.search = new Search(client);
    this.client = client;
  }
  healthz() {
    return this.client.request({
      path: `/healthz`,
      method: 'GET',
    });
  }
  version() {
    return this.client.request({
      path: `/version`,
      method: 'GET',
    });
  }
}
