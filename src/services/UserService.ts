import type { AxiosInstance } from "axios";
import { ApiService } from "./ApiService";
import type { ID } from "@/types/common";
import type { UsersRequest } from "@/types/api";
import type { UserModel } from "@/types/models";

export class UserService extends ApiService {
	constructor(axios: AxiosInstance) {
		super(axios, "/users");
	}

	public async getAll() {
		return super.request<UserModel[]>("GET");
	}

	public async getOne(id: ID) {
		return super.request<UserModel>("GET", `/${id}`);
	}

	public async delete(id: ID) {
		return super.request<UserModel>("DELETE", `/${id}`);
	}

	public async update(id: ID, data: UsersRequest) {
		return super.request<UserModel>("PUT", `/${id}`, data);
	}
}
