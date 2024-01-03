import { getAxiosInstance } from "@/helpers/getAxiosInstance";
import { UserModel } from "@/types";

export class AuthService {
  public async register(userData: Partial<UserModel>) {
    try {
      const axiosInstance = await getAxiosInstance()
      if (!axiosInstance) return null

      const res = await axiosInstance.post('/auth/register', userData);
      const data = res.data;
      console.log(data)

      if (res.status === 200 && data) {
        return data
      }
      return null
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }

  public async login(credentials: Record<"email" | "password", string> | undefined) {
    try {
      const axiosInstance = await getAxiosInstance()
      if (!axiosInstance) return null

      const res = await axiosInstance.post("/auth/login", credentials)
      const data = res.data
      console.log(data)

      if (res.status === 200 && data) {
        return data
      }
      return null
    } catch (err) {
      console.error('Error during request:', err);
      return null
    }

  }
}
