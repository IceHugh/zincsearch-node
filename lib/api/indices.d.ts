import { IndexAnalyzeResponse, MetaIndexSimple, ListIndicesParams, IndexIndexListResponse, MetaHTTPResponse, MetaHTTPResponseIndex, IndexNameParams, MetaTermsQuery, SetMapping, SetSetting } from '../type';
export default class Indices {
    private readonly client;
    constructor(client: any);
    analyze(params: object): Promise<IndexAnalyzeResponse>;
    analyzeIndex(index: string, params: object): Promise<IndexAnalyzeResponse>;
    list(params?: ListIndicesParams): Promise<IndexIndexListResponse>;
    create(params: MetaIndexSimple): Promise<MetaHTTPResponseIndex>;
    exists(index: string): Promise<MetaHTTPResponse>;
    get(index: string): Promise<object>;
    delete(index: string): Promise<MetaHTTPResponseIndex>;
    refresh(index: string): Promise<MetaHTTPResponse>;
    listName(params: IndexNameParams): Promise<string[]>;
    getMapping(index: string): Promise<MetaTermsQuery>;
    setMapping({ index, mapping }: SetMapping): Promise<MetaHTTPResponse>;
    getSetting(index: string): Promise<MetaTermsQuery>;
    setSetting({ index, settings }: SetSetting): Promise<MetaHTTPResponse>;
}
//# sourceMappingURL=indices.d.ts.map