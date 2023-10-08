import axios from "axios";
import { AuthResponse } from "../models/response/AuthResponse";

export const API_URL = "http://localhost:2000";
const apiInstance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

apiInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

apiInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      console.log('opa')
      originalRequest._isRetry = true;
      try {
        console.log('tyt')
        const response = await axios.post<AuthResponse>(`${API_URL}/auth/refresh-tokens`, {
          withCredentials: true,
        });
        localStorage.setItem("token", response.data.token);
        return apiInstance.request(originalRequest);
      } catch (e) {
        console.log("НЕ АВТОРИЗОВАН");
      }
    }
    throw error;
  },
);

export default apiInstance;
