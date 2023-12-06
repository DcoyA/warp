import apiClient from "./apiClient";
import useUser from "@/hooks/useUser";
import useUserStore from "@/client-state/user";

export const requestPartner = async ({ id, data }: any) => {
  try {
    const res = await apiClient.post<Response>(
      `/users/${id}/partnerships`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
