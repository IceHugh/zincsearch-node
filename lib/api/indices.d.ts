import { IndexAnalyzeResponse, MetaIndexSimple, ListIndicesParams, IndexIndexListResponse, MetaHTTPResponse, MetaHTTPResponseIndex, IndexNameParams, MetaTermsQuery, MetaMappings, MetaIndexSettings } from '../type';
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
    nameList(params: IndexNameParams): Promise<string[]>;
    getMapping(index: string): Promise<MetaTermsQuery>;
    setMapping(index: string, mapping: MetaMappings): Promise<MetaHTTPResponse>;
    getSetting(index: string): Promise<MetaTermsQuery>;
    setSetting(index: string, settings: MetaIndexSettings): Promise<MetaHTTPResponse>;
}
//# sourceMappingURL=indices.d.ts.map