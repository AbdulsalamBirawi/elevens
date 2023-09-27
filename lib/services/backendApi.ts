import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_API_URL } from "../../constants/settings";

import { HYDRATE } from "next-redux-wrapper";
const baseUrl = BASE_API_URL;
const createRequest = (url: string) => ({ url });

export const BackendApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  refetchOnMountOrArgChange: true,

  endpoints: (builder) => ({}),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
});
export const {} = BackendApi;
