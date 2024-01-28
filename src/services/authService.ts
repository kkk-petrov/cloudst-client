import { doRequest } from "@/api/doRequest";
import { LoginData, RegisterData } from "@/types";
import { AuthRequest, AuthResponse } from "@/types/requests";

export class AuthService {
  public async register(data: RegisterData) {
    return doRequest<AuthRequest, AuthResponse>("POST", '/auth/register', data);
  }

  public async login(data: LoginData) {
    return doRequest<AuthRequest, AuthResponse>("POST", "/auth/login", data)
  }
}

