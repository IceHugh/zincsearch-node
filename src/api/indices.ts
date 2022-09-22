import {
  IndexAnalyzeResponse,
  MetaIndexSimple,
  ListIndicesParams,
  IndexIndexListResponse,
  MetaHTTPResponse,
  MetaHTTPResponseIndex,
  CoreIndex,
  IndexNameParams,
  MetaTermsQuery,
  MetaMappings,
  MetaIndexSettings,
} from '../type';
import Request from '../client';

export default class Indices {
  private readonly client: Request;
  constructor(client: any) {
    this.client = client;
  }
  /**
   * No description
   *
   * @tags Index
   * @name Analyze
   * @summary Analyze
   * @request POST:/api/_analyze
   */
  analyze(params: object) {
    return this.client.request<IndexAnalyzeResponse>({
      path: '/api/_analyze',
      method: 'POST',
      body: JSON.stringify(params),
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name AnalyzeIndex
   * @summary Analyze
   * @request POST:/api/{index}/_analyze
   */
  analyzeIndex(index: string, params: object) {
    return this.client.request<IndexAnalyzeResponse>({
      path: `/api/${index}/_analyze`,
      method: 'POST',
      body: JSON.stringify(params),
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name ListIndexes
   * @summary List indexes
   * @request GET:/api/index
   */
  list(params?: ListIndicesParams) {
    return this.client.request<IndexIndexListResponse>({
      path: '/api/index',
      method: 'GET',
      query: params,
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name CreateIndex
   * @summary Create index
   * @request POST:/api/index
   */
  create(params: MetaIndexSimple) {
    return this.client.request<MetaHTTPResponseIndex>({
      path: '/api/index',
      method: 'POST',
      body: JSON.stringify(params),
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name Exists
   * @summary Checks if the index exists
   * @request HEAD:/api/index/{index}
   */
  exists(index: string) {
    return this.client.request<MetaHTTPResponse>({
      path: `/api/index/${index}`,
      method: 'HEAD',
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name GetIndex
   * @summary Get index metadata
   * @request GET:/api/index/{index}
   */
  get(index: string) {
    return this.client.request<CoreIndex>({
      path: `/api/index/${index}`,
      method: 'GET',
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name DeleteIndex
   * @summary Delete index
   * @request DELETE:/api/index/{index}
   */
  delete(index: string) {
    return this.client.request<MetaHTTPResponseIndex>({
      path: `/api/index/${index}`,
      method: 'DELETE',
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name Refresh
   * @summary Resfresh index
   * @request POST:/api/index/{index}/refresh
   */
  refresh(index: string) {
    return this.client.request<MetaHTTPResponse>({
      path: `/api/index/${index}/refresh`,
      method: 'POST',
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name IndexNameList
   * @summary List index Name
   * @request GET:/api/index_name
   */
  nameList(params: IndexNameParams) {
    return this.client.request<string[]>({
      path: `/api/index_name`,
      method: 'GET',
      query: params,
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name GetMapping
   * @summary Get index mappings
   * @request GET:/api/{index}/_mapping
   */
  getMapping(index: string) {
    return this.client.request<MetaTermsQuery>({
      path: `/api/${index}/_mapping`,
      method: 'GET',
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name SetMapping
   * @summary Set index mappings
   * @request PUT:/api/{index}/_mapping
   */
  setMapping(index: string, mapping: MetaMappings) {
    return this.client.request<MetaHTTPResponse>({
      path: `/api/${index}/_mapping`,
      method: 'PUT',
      body: JSON.stringify(mapping),
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name GetSettings
   * @summary Get index settings
   * @request GET:/api/{index}/_settings
   */
  getSetting(index: string) {
    return this.client.request<MetaTermsQuery>({
      path: `/api/${index}/_setting`,
      method: 'GET',
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name SetSettings
   * @summary Set index Settings
   * @request PUT:/api/{index}/_settings
   */
  setSetting(index: string, settings: MetaIndexSettings) {
    return this.client.request<MetaHTTPResponse>({
      path: `/api/${index}/_setting`,
      method: 'PUT',
      body: JSON.stringify(settings),
    });
  }
}
