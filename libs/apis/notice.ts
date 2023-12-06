import apiClient from "./apiClient";

type GetNoticeParams = {
  page: number;
  limit: number;
};

export type Response = {
  statusCode: number;
  error: boolean;
  data: string;
  message: string;
};

export const getNotices = async ({ page, limit }: GetNoticeParams) => {
  const res = await apiClient.get(`/notices?page=${page}&limit=${limit}`);
  return res.data;
};
