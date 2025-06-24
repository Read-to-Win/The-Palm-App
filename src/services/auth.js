import { apiClient } from "./config";

export const apiLogin = async (payload) => apiClient.post("/auth/login", payload);

export const apiSignUp = async (payload) => apiClient.post("/auth/signup", payload);

export const apiForgotPswd = async (payload) => apiClient.post("/auth/forgot-password", payload);

export const apiResetPswd = async (payload) => apiClient.post("/auth/reset-password/{token}", payload);