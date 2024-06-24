import {
  allUserResponse,
  curretUserResponse,
  loginRequest,
  loginResponse,
} from "@/helper/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const stayManagerApi = createApi({
  reducerPath: "stayManagerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
  }),

  endpoints: (builder) => ({
    login: builder.mutation<loginResponse, loginRequest>({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
      }),
    }),
    currentUser: builder.query<curretUserResponse, void>({
      query: () => "/user/current-user",
    }),
    allUser: builder.query<allUserResponse, void>({
      query: () => "/user/find-allUsers",
    }),
  }),
});

export const { useLoginMutation, useCurrentUserQuery, useAllUserQuery } =
  stayManagerApi;

export default stayManagerApi;
