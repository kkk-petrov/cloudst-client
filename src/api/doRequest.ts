import { Method } from "axios";
import { getAxiosInstance } from "./getAxiosInstance";

export async function doRequest<T, U>(
  method: Method,
  url: string,
  data?: T
): Promise<U> {
  try {
    const axiosInstance = await getAxiosInstance()

    const res = await axiosInstance.request({
      method: method,
      url: url,
      data: data
    }).then(res => res.data);

    // const resData = res.data;

    return { status: "OK", ...res }
  } catch (error) {
    throw new Error(`Error during request: ${error}`)
  }
}
