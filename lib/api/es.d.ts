import { MetaIndexSimple, MetaHTTPResponse, MetaTermsQuery, MetaTemplate, MetaIndexTemplate, MetaHTTPResponseTemplate, EsSearch, MetaSearchResponse } from '../type';
export default class Es {
    private readonly client;
    constructor(client: any);
    bulk(params: string): Promise<MetaTermsQuery>;
    addOrRemoveEsAlias(): Promise<MetaTermsQuery>;
    listTemplates(): Promise<MetaTemplate[]>;
    createTemplate(template: MetaIndexTemplate): Promise<MetaHTTPResponseTemplate>;
    getTemplate(name: string): Promise<MetaIndexTemplate>;
    updateTemplate(name: string, template: MetaIndexTemplate): Promise<MetaIndexTemplate>;
    deleteTemplate(name: string): Promise<MetaHTTPResponse>;
    mSearch(query: string): Promise<MetaIndexTemplate>;
    create(index: string, data: MetaIndexSimple): Promise<MetaTermsQuery>;
    exists(index: string): Promise<MetaHTTPResponse>;
    getMapping(index: string): Promise<MetaTermsQuery>;
    search(params: EsSearch): Promise<MetaSearchResponse>;
    getAliases(target?: string, targetAlias?: string): Promise<MetaTermsQuery>;
}
//# sourceMappingURL=es.d.ts.map