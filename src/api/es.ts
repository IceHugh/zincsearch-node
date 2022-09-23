import {
  EsCreateIndex,
  MetaHTTPResponse,
  MetaTermsQuery,
  MetaTemplate,
  MetaIndexTemplate,
  MetaHTTPResponseTemplate,
  EsSearch,
  MetaSearchResponse,
} from '../type';
import Request from '../client';

export default class Es {
  private readonly client: Request;
  constructor(client: any) {
    this.client = client;
  }
  /**
   * No description
   *
   * @tags Document
   * @name EsBulk
   * @summary ES bulk documents
   * @request POST:/es/_bulk
   */
  bulk(params: string) {
    return this.client.request<MetaTermsQuery>({
      path: '/es/_bulk',
      method: 'POST',
      body: params,
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name AddOrRemoveEsAlias
   * @summary Add or remove index alias for compatible ES
   * @request POST:/es/_aliases
   */
  addOrRemoveEsAlias() {
    return this.client.request<MetaTermsQuery>({
      path: '/es/_aliase',
      method: 'POST',
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name ListTemplates
   * @summary List index teplates
   * @request GET:/es/_index_template
   */
  listTemplates() {
    return this.client.request<MetaTemplate[]>({
      path: '/es/_index_template',
      method: 'GET',
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name CreateTemplate
   * @summary Create update index template
   * @request POST:/es/_index_template
   */
  createTemplate(template: MetaIndexTemplate) {
    return this.client.request<MetaHTTPResponseTemplate>({
      path: '/es/_index_template',
      method: 'POST',
      body: JSON.stringify(template),
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name GetTemplate
   * @summary Get index template
   * @request GET:/es/_index_template/{name}
   */
  getTemplate(name: string) {
    return this.client.request<MetaIndexTemplate>({
      path: `/es/_index_template/${name}`,
      method: 'GET',
    });
  }
  updateTemplate(name: string, template: MetaIndexTemplate) {
    return this.client.request<MetaIndexTemplate>({
      path: `/es/_index_template/${name}`,
      method: 'PUT',
      body: JSON.stringify(template),
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name DeleteTemplate
   * @summary Delete template
   * @request DELETE:/es/_index_template/{name}
   */
  deleteTemplate(name: string) {
    return this.client.request<MetaHTTPResponse>({
      path: `/es/_index_template/${name}`,
      method: 'DELETE',
    });
  }
  /**
   * No description
   *
   * @tags Search
   * @name MSearch
   * @summary Search V2 MultipleSearch for compatible ES
   * @request POST:/es/_msearch
   */
  mSearch(query: string) {
    return this.client.request<MetaIndexTemplate>({
      path: `/es/_msearch`,
      method: 'PUT',
      body: query,
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name EsCreateIndex
   * @summary Create index for compatible ES
   * @request PUT:/es/{index}
   */
  create(params: EsCreateIndex) {
    const { index, ...data } = params;
    return this.client.request<MetaTermsQuery>({
      path: `/es/${index}`,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name EsExists
   * @summary Checks if the index exists for compatible ES
   * @request HEAD:/es/{index}
   */
  exists(index: string) {
    return this.client.request<MetaHTTPResponse>({
      path: `/es/${index}`,
      method: 'HEAD',
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name EsGetMapping
   * @summary Get index mappings for compatible ES
   * @request GET:/es/{index}/_mapping
   */
  getMapping(index: string) {
    return this.client.request<MetaTermsQuery>({
      path: `/es/${index}/_mapping`,
      method: 'GET',
    });
  }
  /**
   * No description
   *
   * @tags Search
   * @name Search
   * @summary Search V2 DSL for compatible ES
   * @request POST:/es/{index}/_search
   */
  search(params: EsSearch) {
    const { index, ...data } = params;
    return this.client.request<MetaSearchResponse>({
      path: `/es/${index}/_search`,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  /**
   * No description
   *
   * @tags Index
   * @name GetEsAliases
   * @summary Get index alias for compatible ES
   * @request GET:/es/{target}/_alias/{target_alias}
   */
  getAliases(target?: string, targetAlias?: string) {
    return this.client.request<MetaTermsQuery>({
      path: `/es/${target}/_alias/${targetAlias}`,
      method: 'GET',
    });
  }
}
