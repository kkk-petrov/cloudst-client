import { getAxiosInstance } from "./getAxiosInstance";

export async function doRequest<T, U>(url: string, data?: T): Promise<U | null> {
  try {
    const axiosInstance = await getAxiosInstance()
    if (!axiosInstance) return null

    const res = await axiosInstance.post(url, data);
    const resData = res.data;

    if (resData) {
      return resData
    }

    return null
  } catch (error) {
    console.error('Error during request: ', error);
    return null;
  }
}
