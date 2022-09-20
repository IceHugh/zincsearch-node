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
    constructor(client: any);
    list(params?: ListIndicesParams): Promise<any>;
    create(params: CreateIndicesParams): Promise<any>;
    exists(params: ExistsIndicesParams): Promise<any>;
    get(index: string): any;
    delete(index: string): any;
    refresh(index: string): any;
    getMapping(index: string): any;
    updateMapping({ index, mapping }: UpdateMappingParams): any;
    getSetting(index: string): any;
    updateSetting({ index, setting }: UpdateSettingParams): any;
}
//# sourceMappingURL=indices.d.ts.map