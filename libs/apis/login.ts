import apiClient from "./apiClient";

export type SendAuthResponse = {
  statusCode: number;
  error: boolean;
  data: string;
  message: string;
};
export type AccountParam = { firebaseUid: string };

export const getMyAccount = async ({ firebaseUid }: AccountParam) => {
  // browser에서 mac주소를 알 수 없음..
  const res = apiClient.post<SendAuthResponse>(`/auth/login`, {
    firebaseUid,
    macAddress: "",
  });
  return res;
};
