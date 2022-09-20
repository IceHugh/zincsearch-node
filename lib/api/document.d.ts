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
    constructor(client: any);
    multi(params: MultiParams): Promise<any>;
    bulkv2(params: MultiParams): Promise<any>;
    create(params: CreateParams): Promise<any>;
    update(params: UpdateParams): Promise<any>;
    createOrUpdate(params: UpdateParams): Promise<any>;
    delete(params: DeleteParams): Promise<any>;
}
//# sourceMappingURL=document.d.ts.map