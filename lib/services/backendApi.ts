import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../constants/settings";

import { HYDRATE } from "next-redux-wrapper";
import { contactUsInfo } from "./types";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
const baseUrl = BASE_API_URL;

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method?: AxiosRequestConfig["method"];
      body?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method = "GET", body, headers, params }) => {
    try {
      const result = await axios({
        url,
        method,
        data: body,
        params,
        headers,
      });

      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;

      return Promise.reject(err);
    }
  };

const createRequest = (url: string) => ({ url });

export const BackendApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    // createContactUsInfo: builder.mutation<contactUsInfo, JSON>({
    // 		query: (contactUsInfo) => ({
    // 			url: '/contact',
    // 			method: 'POST',
    // 			body: contactUsInfo,
    // 		}),
  }),
});
export const {} = BackendApi;
