import type { AxiosInstance } from "axios";
import { ApiService } from "./ApiService";
import type { ID } from "@/types/common";
import type { UsersRequest } from "@/types/api";
import type { UserModel } from "@/types/models";
import { endpoints } from "@/api/config";

export class UserService extends ApiService {
  private readonly endpoints

  constructor(axios: AxiosInstance) {
    super(axios, "/users");
    this.endpoints = endpoints.users
  }

  public async getAll() {
    return super
      .request<UserModel[]>("GET", this.endpoints.getAll)
      .then((res) => res.data);
  }

  public async getOne(id: ID) {
    return super
      .request<UserModel>("GET", this.endpoints.getOne(id))
      .then((res) => res.data);
  }

  public async delete(id: ID) {
    return super
      .request<UserModel>("DELETE", this.endpoints.delete(id))
      .then((res) => res.data);
  }

  public async update(id: ID, data: UsersRequest) {
    return super
      .request<UserModel>("PUT", this.endpoints.update(id), data)
      .then((res) => res.data);
  }
}
