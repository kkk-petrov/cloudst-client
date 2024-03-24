import type { FilesRequest, FilesResponse } from "@/types/api";
import type { AxiosInstance, Method } from "axios";

export class FilesService {
	private readonly URL = "/files";
	private axiosInstance: AxiosInstance;

	constructor(axiosInstance: AxiosInstance) {
		this.axiosInstance = axiosInstance;
	}

	private async doRequest(
		method: Method,
		url: string,
		data?: FilesRequest,
	): Promise<FilesResponse> {
		try {
			const res = await this.axiosInstance
				.request({
					method: method,
					url: this.URL + url,
					data: data,
				})
				.then((res) => res.data);

			return res;
		} catch (error) {
			throw new Error(`Error during request: ${error}`);
		}
	}

	public async upload(files: FormData): Promise<FilesResponse> {
		return this.doRequest("POST", "/upload", files);
	}

	public async getAll(): Promise<FilesResponse> {
		return this.doRequest("GET", "/");
	}

	public async getOne(id: string): Promise<FilesResponse> {
		return this.doRequest("GET", `/${id}`);
	}

	public async delete() {}

	public async update() {}

	public async download() {}
}
