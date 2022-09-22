import { AuthLoginRequest, AuthLoginResponse, MetaUser, MetaHTTPResponseID } from '../type';
import Request from '../client';
export default class User {
    private readonly client;
    constructor(client: Request);
    login(login: AuthLoginRequest): Promise<AuthLoginResponse>;
    list(): Promise<AuthLoginResponse>;
    create(user: MetaUser): Promise<MetaHTTPResponseID>;
    update(user: MetaUser): Promise<MetaHTTPResponseID>;
    delete(id: string): Promise<MetaHTTPResponseID>;
}
//# sourceMappingURL=user.d.ts.map