import type {AxiosResponse} from 'axios';
import apiInstance from "../http";
import {AuthResponse} from "../models/response/AuthResponse";

const BASE_URL = "viewer/"

export class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return apiInstance.post<AuthResponse>(`${BASE_URL}/login`, {email, password})
    }

    static async logout(): Promise<unknown>{
        return apiInstance.post(`${BASE_URL}/logout`)
    }
}