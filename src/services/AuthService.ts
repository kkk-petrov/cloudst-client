import type { AxiosInstance } from "axios";
import type { LoginData, RegisterData, AuthResponse } from "../types/api";
import { ApiService } from "./ApiService";
import { endpoints } from "@/api/config";

export class AuthService extends ApiService {
  private readonly endpoints = endpoints.auth

  constructor(axios: AxiosInstance) {
    super(axios, "/auth");
  }

  public async register(data: RegisterData) {
    return super
      .request<AuthResponse>("POST", this.endpoints.register, data)
      .then((res) => res.data);
  }

  public async login(data: LoginData) {
    return super
      .request<AuthResponse>("POST", this.endpoints.login, data)
      .then((res) => res.data);
  }

  public async refresh() {
    return super
      .request<string | null>("GET", this.endpoints.refresh)
      .then((res) => res.data);
  }
}
