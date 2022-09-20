export interface MultiParams {
  index: string;
  data: any[];
}
export interface GetParams {
  index: string;
  id: string;
}
export interface CreateParams {
  index: string;
  data: Record<string, any>;
}
export interface DeleteParams {
  index: string;
  id: string;
}

export interface UpdateParams extends CreateParams {
  id: string;
}
export default class Document {
  private readonly client;
  constructor(client: any) {
    this.client = client;
  }
  multi(params: MultiParams): Promise<any> {
    const { index, data } = params;
    return this.client.request({
      path: `/api/${index}/_multi`,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  bulkv2(params: MultiParams): Promise<any> {
    const { index, data } = params;
    return this.client.request({
      path: `/api/_bulkv2`,
      method: 'POST',
      body: JSON.stringify({
        index,
        records: data,
      }),
    });
  }
  create(params: CreateParams): Promise<any> {
    const { index, data } = params;
    return this.client.request({
      path: `/api/${index}/_doc/`,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  update(params: UpdateParams): Promise<any> {
    const { index, data, id } = params;
    return this.client.request({
      path: `/api/${index}/_update/${id}`,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
  createOrUpdate(params: UpdateParams): Promise<any> {
    const { index, data, id } = params;
    return this.client.request({
      path: `/api/${index}/_doc/${id}`,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
  delete(params: DeleteParams): Promise<any> {
    const { index, id } = params;
    return this.client.request({
      path: `/api/${index}/_update/${id}`,
      method: 'DELETE',
    });
  }
}
