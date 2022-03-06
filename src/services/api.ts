import axios from "axios";
import { writable } from "svelte/store";
import { useAuth0 } from "./auth0";
import type { AvailablePart, NewAvailablePart } from "../types";

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

    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data;
    }

    return error.message;
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

export const getAvailablePedals = async (): Promise<Array<any>> => {
  return makeRequest({
    url: `${apiServerUrl}/api/pedals/available`,
    method: "GET",
  });
};
