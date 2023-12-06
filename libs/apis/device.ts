import apiClient from "./apiClient";

type GetDevicesParams = {
  placeId?: number;
};

type GetVisitorPassParams = {
  robotKey?: string;
};

export type Response = {
  statusCode: number;
  error: boolean;
  data: any;
  message: string;
};

export const getDevicesInPlace = async ({ placeId }: GetDevicesParams) => {
  try {
    const res = await apiClient.get<Response>(`/places/${placeId}/devices`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * double rotobitcs에서 추가로 ADMIN 계정을 구매해야 사용할 수 있는 api
 */
export const getDeviceVisiterPass = async ({
  robotKey,
}: GetVisitorPassParams) => {
  try {
    const res = await apiClient.get<Response>(
      `/devices/visitorPass?robotKey=${robotKey} `
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
