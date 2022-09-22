import {
  AuthLoginRequest,
  AuthLoginResponse,
  MetaUser,
  MetaHTTPResponseID,
} from '../type';
import Request from '../client';

export default class User {
  private readonly client: Request;
  constructor(client: Request) {
    this.client = client;
  }
  /**
   * No description
   *
   * @tags User
   * @name Login
   * @summary Login
   * @request POST:/api/login
   */
  login(login: AuthLoginRequest) {
    return this.client.request<AuthLoginResponse>({
      path: `/api/login`,
      method: 'POST',
      body: JSON.stringify(login),
    });
  }
  /**
   * No description
   *
   * @tags User
   * @name ListUsers
   * @summary List user
   * @request GET:/api/user
   */
  list() {
    return this.client.request<AuthLoginResponse>({
      path: `/api/user`,
      method: 'GET',
    });
  }
  /**
   * No description
   *
   * @tags User
   * @name CreateUser
   * @summary Create user
   * @request POST:/api/user
   */
  create(user: MetaUser) {
    return this.client.request<MetaHTTPResponseID>({
      path: `/api/user`,
      method: 'POST',
      body: JSON.stringify(user),
    });
  }
  /**
   * No description
   *
   * @tags User
   * @name UpdateUser
   * @summary Update user
   * @request PUT:/api/user
   */
  update(user: MetaUser) {
    return this.client.request<MetaHTTPResponseID>({
      path: `/api/user`,
      method: 'PUT',
      body: JSON.stringify(user),
    });
  }
  /**
   * No description
   *
   * @tags User
   * @name DeleteUser
   * @summary Delete user
   * @request DELETE:/api/user/{id}
   */
  delete(id: string) {
    return this.client.request<MetaHTTPResponseID>({
      path: `/api/user/${id}`,
      method: 'DELETE',
    });
  }
}
