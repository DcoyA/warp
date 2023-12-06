import apiClient from "./apiClient";

type RobotParams = {
  robotKey: string;
};

export type Response = {
  statusCode: number;
  error: boolean;
  data: string;
  message: string;
};

export const getRobotInfo = async ({ robotKey }: RobotParams) => {
  const res = await apiClient.get(`/robots?robotKey=${robotKey}`);
  return res.data;
};
