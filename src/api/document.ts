import Request from '../client';
import {
  MetaHTTPResponseRecordCount,
  MetaJSONIngest,
  MetaHTTPResponseID,
  DocumentCreate,
  DocumentUpdate,
  DocumentDelete,
  DocumentMulti,
} from '../type';
export default class Document {
  private readonly client: Request;
  constructor(client: Request) {
    this.client = client;
  }
  /**
   * No description
   *
   * @tags Document
   * @name Bulk
   * @summary Bulk documents
   * @request POST:/api/_bulk
   */
  bulk(params: string) {
    return this.client.request<MetaHTTPResponseRecordCount>({
      path: `/api/_bulk`,
      method: 'POST',
      body: params,
    });
  }
  /**
   * No description
   *
   * @tags Document
   * @name Bulkv2
   * @summary Bulkv2 documents
   * @request POST:/api/_bulkv2
   */
  bulkv2(params: MetaJSONIngest) {
    return this.client.request<MetaHTTPResponseRecordCount>({
      path: `/api/_bulkv2`,
      method: 'POST',
      body: JSON.stringify(params),
    });
  }
  /**
   * No description
   *
   * @tags Document
   * @name Multi
   * @summary Multi documents
   * @request POST:/api/{index}/_multi
   */
  multi(params: DocumentMulti): Promise<any> {
    const { index, query } = params;
    return this.client.request({
      path: `/api/${index}/_multi`,
      method: 'POST',
      body: JSON.stringify(query),
    });
  }
  /**
   * No description
   *
   * @tags Document
   * @name IndexDocument
   * @summary Create or update document
   * @request POST:/api/{index}/_doc
   */
  create(params: DocumentCreate) {
    const { index, document } = params;
    return this.client.request<MetaHTTPResponseID>({
      path: `/api/${index}/_doc`,
      method: 'POST',
      body: JSON.stringify(document),
    });
  }
  /**
   * No description
   *
   * @tags Document
   * @name UpdateDocument
   * @summary Update document with id
   * @request POST:/api/{index}/_update/{id}
   */
  update(params: DocumentUpdate): Promise<any> {
    const { index, document, id } = params;
    return this.client.request({
      path: `/api/${index}/_update/${id}`,
      method: 'POST',
      body: JSON.stringify(document),
    });
  }
  /**
   * No description
   *
   * @tags Document
   * @name IndexDocumentWithId
   * @summary Create or update document with id
   * @request PUT:/api/{index}/_doc/{id}
   */
  createOrUpdate(params: DocumentUpdate): Promise<any> {
    const { index, document, id } = params;
    return this.client.request<MetaHTTPResponseID>({
      path: `/api/${index}/_doc/${id}`,
      method: 'PUT',
      body: JSON.stringify(document),
    });
  }
  /**
   * No description
   *
   * @tags Document
   * @name DeleteDocument
   * @summary Delete document
   * @request DELETE:/api/{index}/_doc/{id}
   */
  delete(params: DocumentDelete): Promise<any> {
    const { index, id } = params;
    return this.client.request({
      path: `/api/${index}/_update/${id}`,
      method: 'DELETE',
    });
  }
}
