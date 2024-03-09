import { UsersRequest, UsersResponse } from "@/types/api";
import { UserID } from "@/types/common";
import { AxiosInstance, Method } from "axios";

export class UsersService {
	private readonly URL = "/users";
	private axiosInstance: AxiosInstance;

	constructor(axiosInstance: AxiosInstance) {
		this.axiosInstance = axiosInstance;
	}
	private async doRequest(
		method: Method,
		url: string = this.URL,
		data?: UsersRequest,
	): Promise<UsersResponse> {
		try {
			const res = await this.axiosInstance
				.request({
					method: method,
					url: url,
					data: data,
				})
				.then((res) => res.data);

			return res;
		} catch (error) {
			throw new Error(`Error during request: ${error}`);
		}
	}

	public async getAll() {
		return this.doRequest("get");
	}

	public async getOne(id: UserID) {
		return this.doRequest("get", `${this.URL}/${id}`);
	}

	public async delete(id: UserID) {
		return this.doRequest("delete", `${this.URL}/${id}`);
	}

	public async update(id: UserID, data: UsersRequest) {
		return this.doRequest("put", `${this.URL}/${id}`, data);
	}
}
