export interface CreateIndicesParams {
  mappings?: Record<string, any>;
  settings?: Record<string, any>;
  name: string;
  shard_num: number;
  storage_type: string;
}

export interface ListIndicesParams {
  pageNum?: number;
  pageSize?: number;
  sortBy?: string;
  desc?: string;
  name?: string;
}

export interface ExistsIndicesParams {
  index: string;
}
export interface Mapping {
  properties: Record<string, any>;
}
export interface UpdateMappingParams {
  index: string;
  mapping: Mapping;
}
export interface Setting {
  analysis: Record<string, any>;
  number_of_replicas: number;
  number_of_shards: number;
}

export interface UpdateSettingParams {
  index: string;
  setting: Setting;
}
export default class Indices {
  private readonly client;
  constructor(client: any) {
    this.client = client;
  }
  list(params?: ListIndicesParams): Promise<any> {
    return this.client.request({
      path: '/api/index',
      method: 'GET',
      query: params,
    });
  }
  create(params: CreateIndicesParams): Promise<any> {
    return this.client.request({
      path: '/api/index',
      method: 'POST',
      body: JSON.stringify(params),
    });
  }
  exists(params: ExistsIndicesParams): Promise<any> {
    return this.client.request({
      path: `/api/index/${params.index}`,
      method: 'HEAD',
    });
  }
  get(index: string) {
    return this.client.request({
      path: `/api/index/${index}`,
      method: 'GET',
    });
  }
  delete(index: string) {
    return this.client.request({
      path: `/api/index/${index}`,
      method: 'DELETE',
    });
  }
  refresh(index: string) {
    return this.client.request({
      path: `/api/index/${index}/refresh`,
      method: 'POST',
    });
  }
  getMapping(index: string) {
    return this.client.request({
      path: `/api/${index}/_mapping`,
      method: 'GET',
    });
  }
  updateMapping({ index, mapping }: UpdateMappingParams) {
    return this.client.request({
      path: `/api/${index}/_mapping`,
      method: 'PUT',
      body: JSON.stringify(mapping),
    });
  }
  getSetting(index: string) {
    return this.client.request({
      path: `/api/${index}/_setting`,
      method: 'GET',
    });
  }
  updateSetting({ index, setting }: UpdateSettingParams) {
    return this.client.request({
      path: `/api/${index}/_setting`,
      method: 'PUT',
      body: JSON.stringify(setting),
    });
  }
}
