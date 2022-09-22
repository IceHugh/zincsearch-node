import { V1Search, MetaSearchResponse } from '../type';
import Request from '../client';

export default class Search {
  private readonly client: Request;
  constructor(client: Request) {
    this.client = client;
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
