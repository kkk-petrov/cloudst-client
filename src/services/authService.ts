import { LoginData, RegisterData, UserModel } from "@/types";
import { ApiService } from "./apiService";
import { AuthRequest, AuthResponse } from "@/types/requests";


export class AuthService {
  private apiService: ApiService<AuthRequest, AuthResponse>;

  constructor(apiService: ApiService<AuthRequest, AuthResponse>) {
    this.apiService = apiService
  }

  public async register(data: RegisterData) {
    return this.apiService.doRequest('/auth/register', data);
  }

  public async login(data: LoginData) {
    return this.apiService.doRequest("/auth/login", data)
  }
}
