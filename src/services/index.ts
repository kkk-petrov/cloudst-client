import { AuthRequest, AuthResponse } from "@/types/requests";
import { ApiService } from "./apiService";
import { AuthService } from "./authService";

const apiService = new ApiService<AuthRequest, AuthResponse>();
const authService = new AuthService(apiService);

export { authService };
