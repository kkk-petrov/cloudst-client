import { UserModel } from "@/types";
import { getAxiosInstance } from "./request";

export const register = async (userData: Partial<UserModel>) => {
  try {
    const axiosInstance = await getAxiosInstance()
    if (!axiosInstance) return null


    const response = await axiosInstance.post('/auth/register', userData);
    const data = response.data;

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }

}
