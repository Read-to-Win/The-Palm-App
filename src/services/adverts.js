import { apiClient } from "./config";

// getAll advert

export const apiFetchAdverts = async () => apiClient.get("/useAdvert/adverts");

// add a new Advert

export const apiCreateAd = async (payload) => apiClient.post("/useAdvert/vendorAddAdvert", payload);

// get a Single advert
export const apiFetchAdvert = async (id) => apiClient.get(`/useAdvert/adverts/${id}`);

// Update single advert

export const apiEditAdvert = async (id, payload) => apiClient.put(`/userAdvert/vendorUpdateAdvert/${id}`, payload);

// delete advert
export const apiDeleteAdvert = async (id) => apiClient.delete(`/userAdvert/vendorDeleteAdvert/${id}`);
