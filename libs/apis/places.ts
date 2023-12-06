import apiClient from "./apiClient";

export const getPlaces = async () => {
  const res = await apiClient.get(`/places`);
  return res.data;
};
