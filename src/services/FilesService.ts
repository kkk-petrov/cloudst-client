import type { AxiosInstance } from "axios";
import { ApiService } from "./ApiService";

export class FilesService extends ApiService {
	constructor(axios: AxiosInstance) {
		super(axios, "/files");
	}

	public async upload(files: FormData) {
		return this.request("POST", "/upload", files);
	}

	public async download(id: string) {
		const res = await super.request("GET", `/${id}/download`, null, {
			responseType: "blob",
		});

		if (res.data instanceof Blob) {
			const blob = res.data;
			const filename = res.headers["x-filename"];

			const downloadLink = document.createElement("a");
			downloadLink.href = URL.createObjectURL(blob);
			downloadLink.download = filename;
			downloadLink.click();
			URL.revokeObjectURL(downloadLink.href);
		} else {
			console.error("Unexpected download response format");
		}
	}

	public async getAll() {
		return this.request("GET");
	}

	public async getOne(id: string) {
		return this.request("GET", `/${id}`);
	}

	// public async delete(id: string) {
	// 	throw new Error("Delete functionality not implemented yet");
	// }
	//
	// public async update(id: string, data: updateFileData) {
	// 	throw new Error("Update functionality not implemented yet");
	// }
}
