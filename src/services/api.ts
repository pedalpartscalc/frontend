import axios from "axios";
import { useAuth0 } from "./auth0";
import type {
  AvailablePart,
  NewAvailablePart,
  Pedal,
  NewPedal,
  NewRequiredPart,
} from "../types";

export const AccessControlLevel = {
  PUBLIC: "public",
  PROTECTED: "requires-authentication",
  RBAC: "requires-role-permission",
  CORS: "requires-cors-allowed-method",
};

const apiServerUrl = process.env.API_SERVER_URL;

const { getAccessToken } = useAuth0;

const makeRequest = async (options) => {
  try {
    const token = await getAccessToken();

    options.headers = {
      ...options.headers,
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const response = await axios(options);

    const { data } = response;
    console.log(`API sent: ${JSON.stringify(data)}`);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data);
    }

    throw new Error(error.message);
  }
};

export const createAvailablePart = async (
  newPart: NewAvailablePart
): Promise<number> => {
  return makeRequest({
    url: `${apiServerUrl}/api/parts`,
    method: "POST",
    data: newPart,
  });
};

export const updateAvailablePart = async (
  id: number,
  part: NewAvailablePart
): Promise<void> => {
  return makeRequest({
    url: `${apiServerUrl}/api/parts/${id}`,
    method: "PUT",
    data: part,
  });
};

export const getParts = async (): Promise<Array<AvailablePart>> => {
  return makeRequest({
    url: `${apiServerUrl}/api/parts`,
    method: "GET",
  });
};

export const deleteAvailablePart = async (id: number): Promise<void> => {
  return makeRequest({
    url: `${apiServerUrl}/api/parts/${id}`,
    method: "DELETE",
  });
};

export const getPedal = async (id: number): Promise<any> => {
  return makeRequest({
    url: `${apiServerUrl}/api/pedals/${id}`,
    method: "GET",
  });
};

export const getPedals = async (): Promise<Pedal[]> => {
  return makeRequest({
    url: `${apiServerUrl}/api/pedals`,
    method: "GET",
  });
};

export const getAvailablePedals = async (): Promise<Array<any>> => {
  return makeRequest({
    url: `${apiServerUrl}/api/pedals/available`,
    method: "GET",
  });
};

export const createPedal = async (pedal: NewPedal): Promise<number> => {
  return makeRequest({
    url: `${apiServerUrl}/api/pedals`,
    method: "POST",
    data: pedal,
  });
};

export const updatePedal = async (
  id: number,
  pedal: NewPedal
): Promise<void> => {
  return makeRequest({
    url: `${apiServerUrl}/api/pedals/${id}`,
    method: "PUT",
    data: pedal,
  });
};

export const deletePedal = async (id: number): Promise<void> => {
  return makeRequest({
    url: `${apiServerUrl}/api/pedals/${id}`,
    method: "DELETE",
  });
};

export const createRequiredPart = async (
  pedal_id: number,
  part: NewRequiredPart
): Promise<void> => {
  return makeRequest({
    url: `${apiServerUrl}/api/pedals/${pedal_id}/parts`,
    method: "POST",
    data: part,
  });
};

export const deleteRequiredPart = async (
  pedal_id: number,
  id: number
): Promise<void> => {
  return makeRequest({
    url: `${apiServerUrl}/api/pedals/${pedal_id}/parts/${id}`,
    method: "DELETE",
  });
};

export const isAdmin = async (): Promise<boolean> => {
  try {
    await makeRequest({
      url: `${apiServerUrl}/api/auth/is_admin`,
      method: "POST",
    });
    return true;
  } catch (e: any) {
    return false;
  }
};
