import { FilesRequest, FilesResponse } from "@/types/api";
import { AxiosInstance, Method } from "axios";

export class FilesService {
	private readonly URL = "/files";
	private axiosInstance: AxiosInstance;

	constructor(axiosInstance: AxiosInstance) {
		this.axiosInstance = axiosInstance;
	}

	private async doRequest(
		method: Method,
		url: string = this.URL,
		data?: FilesRequest,
	): Promise<FilesResponse> {
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

	public async upload(files: File[]) {
		return this.doRequest("post", this.URL, files);
	}

	public async getAll() {}

	public async getOne() {}

	public async delete() {}

	public async update() {}

	public async download() {}
}
