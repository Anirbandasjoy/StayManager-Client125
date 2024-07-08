import {
  allNoticeResponse,
  allUserResponse,
  CommentCreateResponse,
  CommentRequest,
  curretUserResponse,
  loginRequest,
  loginResponse,
  ProcessRegistrationRequest,
  processRegistrationResponse,
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

    createComment : builder.mutation<CommentCreateResponse, CommentRequest>({
      query : ({noticeId,inputStr,selectedImage}) => ({
        url : `/comment/create-comment/${noticeId}`,
        method : "POST",
        body : {text : inputStr, commentImage : selectedImage}
      })
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
    processRegister: builder.mutation<processRegistrationResponse, ProcessRegistrationRequest>({
      query: (registerData) => ({
        url: "/user/process-registation",
        method: "POST",
        body: registerData,
      })
    }),
    userRegistration: builder.mutation<registrationResponse, registrationRequest>({
      query: (token) => ({
        url: "/user/registation-user",
        method: "POST",
        body: token
      })
    })

  }),
});

export const {
  useLoginMutation,
  useCurrentUserQuery,
  useAllUserQuery,
  useFindNoticeQuery,
  useProcessRegisterMutation,
  useUserRegistrationMutation
} = stayManagerApi;

export default stayManagerApi;
