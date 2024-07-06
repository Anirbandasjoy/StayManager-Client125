import {
  allNoticeResponse,
  allUserResponse,
  curretUserResponse,
  loginRequest,
  loginResponse,
  registrationRequest,
  registrationResponse,
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
    findNotice: builder.query<allNoticeResponse, void>({
      query: () => "/notice/find-allNotice"
    }),
    processRegister: builder.mutation<registrationResponse, registrationRequest>({
      query: (registerData) => ({
        url: "/user/process-registation",
        method: "POST",
        body: registerData,
      })

    })
  }),
});

export const { useLoginMutation, useCurrentUserQuery, useAllUserQuery, useFindNoticeQuery, useProcessRegisterMutation } =
  stayManagerApi;

export default stayManagerApi;
