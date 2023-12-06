import apiClient from "./apiClient";

type FaqDto = {
  limit: number;
};

export type Response = {
  statusCode: number;
  error: boolean;
  data: string;
  message: string;
};

export const getFaqs = async ({ limit }: FaqDto) => {
  const res = await apiClient.get<Response>(`/faqs?limit=${limit}`);
  return res.data;
};
