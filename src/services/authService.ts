import { getAxiosInstance } from "@/helpers/getAxiosInstance";
import { LoginData, RegisterData, UserModel } from "@/types";


interface AuthResponse {
  user: UserModel
  token: string
}

const OK = 200 || 201

export class AuthService {
  private async doRequest(url: string, data: LoginData | RegisterData | undefined) {
    console.log(data)

    try {
      const axiosInstance = await getAxiosInstance()
      if (!axiosInstance) return null

      const res = await axiosInstance.post(url, data);
      const user = res.data;

      if (user) {
        console.log("OK")
        return user
      }

      return null
    } catch (error) {
      console.error('Error during request: ', error);
      return null;
    }
  }

  public async register(data: RegisterData): Promise<AuthResponse> {
    return this.doRequest('/auth/register', data);
  }

  public async login(data: LoginData | undefined): Promise<AuthResponse> {
    return this.doRequest("/auth/login", data)
  }
}
