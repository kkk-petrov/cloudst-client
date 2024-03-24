import type {
	AuthRequest,
	AuthResponse,
	LoginData,
	RegisterData,
} from "@/types/api";
import type { AxiosInstance } from "axios";

export class AuthService {
	private readonly URL = "/auth";
	private axiosInstance: AxiosInstance;

	constructor(axiosInstance: AxiosInstance) {
		this.axiosInstance = axiosInstance;
	}

	private async doRequest(
		url: string = this.URL,
		data?: AuthRequest,
	): Promise<AuthResponse> {
		try {
			const res = await this.axiosInstance
				.request({
					method: "POST",
					url: this.URL + url,
					data: data,
				})
				.then((res) => res.data);

			return res;
		} catch (error) {
			throw new Error(`Error during request: ${error}`);
		}
	}

	public async register(data: RegisterData) {
		return this.doRequest("/register", data);
	}

	public async login(data: LoginData) {
		return this.doRequest("/login", data);
	}
}
