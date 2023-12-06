import apiClient from "./apiClient";

export const getQna = async (data: any) => {
  const res = await apiClient.get(`/qnas`, { params: data });
  return res;
};

export const createQna = async (formData: any) => {
  try {
    const res = await apiClient.post<Response>(`/qnas`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateQna = async (qnaId: number) => {};

export const deleteQna = async (qnaId: number) => {};
