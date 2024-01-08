import { LoginData, RegisterData } from "@/types";
import { doRequest } from "@/helpers/doRequest";
import { AuthRequest, AuthResponse } from "@/types/requests";

export class AuthService {
  public async register(data: RegisterData) {
    return doRequest<AuthRequest, AuthResponse>('/auth/register', data);
  }

  public async login(data: LoginData) {
    return doRequest<AuthRequest, AuthResponse>("/auth/login", data)
  }
}

