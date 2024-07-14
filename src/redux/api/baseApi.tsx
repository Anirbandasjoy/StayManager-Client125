import {
  allNoticeResponse,
  allUserResponse,
  CommentCreateResponse,
  CommentRequest,
  curretUserResponse,
  GetNoticeCommentResponse,
  loginRequest,
  loginResponse,
  NoticeCommentRequest,
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
    // auth api
    login: builder.mutation<loginResponse, loginRequest>({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
      }),
    }),

    // user api
    currentUser: builder.query<curretUserResponse, void>({
      query: () => "/user/current-user",
    }),
    allUser: builder.query<allUserResponse, void>({
      query: () => "/user/find-allUsers",
    }),
    processRegister: builder.mutation<
      processRegistrationResponse,
      ProcessRegistrationRequest
    >({
      query: (registerData) => ({
        url: "/user/process-registation",
        method: "POST",
        body: registerData,
      }),
    }),
    userRegistration: builder.mutation<
      registrationResponse,
      registrationRequest
    >({
      query: (token) => ({
        url: "/user/registation-user",
        method: "POST",
        body: token,
      }),
    }),
    // notice api
    findNotice: builder.query<allNoticeResponse, void>({
      query: () => "/notice/find-allNotice",
    }),
    // comment api
    createComment: builder.mutation<CommentCreateResponse, CommentRequest>({
      query: ({ noticeId, inputStr, selectedImage }) => ({
        url: `/comment/create-comment/${noticeId}`,
        method: "POST",
        body: { text: inputStr, commentImage: selectedImage },
      }),
    }),

    getNoticeComment: builder.query<
      GetNoticeCommentResponse,
      NoticeCommentRequest
    >({
      query: ({ noticeId }) => `/comment/find-NoticeComments/${noticeId}`,
    }),

    // React Api (Like)
    createReact: builder.mutation<void, any>({
      query: ({ noticeId }) => ({
        url: `/react/create/${noticeId}`,
        method: "POST",
        body: { react: "Liked" },
      })
    }),

    getReact: builder.query({
      query: (noticeId) => `/react/find-notice-react/${noticeId}`
    })

  }),
});

export const {
  useLoginMutation,
  useCurrentUserQuery,
  useAllUserQuery,
  useFindNoticeQuery,
  useProcessRegisterMutation,
  useUserRegistrationMutation,
  useCreateCommentMutation,
  useGetNoticeCommentQuery,
  useCreateReactMutation,
  useGetReactQuery,
} = stayManagerApi;

export default stayManagerApi;
