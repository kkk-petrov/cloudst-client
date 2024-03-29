import type { AxiosInstance } from "axios";
import type { LoginData, RegisterData, AuthResponse } from "../types/api";
import { ApiService } from "./ApiService";

export class AuthService extends ApiService {
	constructor(axios: AxiosInstance) {
		super(axios, "/auth");
	}

	public async register(data: RegisterData) {
		return super.request<AuthResponse>("POST", "/register", data);
	}

	public async login(data: LoginData) {
		return super.request<AuthResponse>("POST", "/login", data);
	}

	public async refresh() {
		return super.request<string | null>("GET", "/refresh");
	}
}
