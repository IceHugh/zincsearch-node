import Request from '../client';
import { MetaHTTPResponseRecordCount, MetaJSONIngest, MetaHTTPResponseID, DocumentCreate, DocumentUpdate, DocumentDelete, DocumentMulti } from '../type';
export default class Document {
    private readonly client;
    constructor(client: Request);
    bulk(params: string): Promise<MetaHTTPResponseRecordCount>;
    bulkv2(params: MetaJSONIngest): Promise<MetaHTTPResponseRecordCount>;
    multi(params: DocumentMulti): Promise<any>;
    create(params: DocumentCreate): Promise<MetaHTTPResponseID>;
    update(params: DocumentUpdate): Promise<any>;
    createOrUpdate(params: DocumentUpdate): Promise<any>;
    delete(params: DocumentDelete): Promise<any>;
}
//# sourceMappingURL=document.d.ts.map