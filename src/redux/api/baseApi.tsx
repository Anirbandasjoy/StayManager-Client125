import {
  allNoticeResponse,
  allUserResponse,
  CommentCreateResponse,
  CommentRequest,
  createReviewRequest,
  createReviewResponse,
  curretUserResponse,
  deleteNoticeRequest,
  deleteNoticeResponse,
  findAllRoomsResponse,
  findRoomReviewRequest,
  findRoomReviewResponse,
  findSaveNotice,
  findSingleRoomRequest,
  findSingleRoomResponse,
  GetNoticeCommentResponse,
  loginRequest,
  loginResponse,
  NoticeCommentRequest,
  ProcessRegistrationRequest,
  processRegistrationResponse,
  registrationRequest,
  registrationResponse,
  saveNoticeRequest,
  saveNoticeResponse,
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
      }),
    }),
    disLike: builder.mutation({
      query: ({ noticeId }) => ({
        url: `/react/dislike/${noticeId}`,
        method: "DELETE",
      }),
    }),

    getReact: builder.query({
      query: (noticeId) => `/react/find-notice-react/${noticeId}`,
    }),

    deleteNotice: builder.mutation<deleteNoticeResponse, deleteNoticeRequest>({
      query: ({ noticeId }) => ({
        url: `/notice/delete/${noticeId}`,
        method: "DELETE",
      }),
    }),

    // Notice Save api

    saveNotice: builder.mutation<saveNoticeResponse, saveNoticeRequest>({
      query: ({ notice }) => ({
        url: `/save/notice/${notice}`,
        method: "POST",
      }),
    }),
    createNotice: builder.mutation({
      query: ({ caption, noticeImage }) => ({
        url: "/notice/create",
        method: "POST",
        body: { caption, noticeImage },
      }),
    }),

    findSaveNotice: builder.query<findSaveNotice, void>({
      query: () => "/save/find-notice",
    }),
    findAllRooms: builder.query<findAllRoomsResponse, void>({
      query: () => "/room/find-allRooms",
    }),
    findSingleRoom: builder.query<
      findSingleRoomResponse,
      findSingleRoomRequest
    >({
      query: ({ id }) => `/room/find-single-room/${id}`,
    }),
    // review api
    createReview: builder.mutation<createReviewResponse, createReviewRequest>({
      query: ({ roomId, message, rating }) => ({
        url: `/review/create/${roomId}`,
        method: "POST",
        body: { message, rating },
      }),
    }),
    findRoomReview : builder.query<findRoomReviewResponse, findRoomReviewRequest>({
       query : ({roomId}) => `/review/find-review/${roomId}`
    }),
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
  useSaveNoticeMutation,
  useFindSaveNoticeQuery,
  useDeleteNoticeMutation,
  useDisLikeMutation,
  useCreateNoticeMutation,
  useFindAllRoomsQuery,
  useFindSingleRoomQuery,
  useCreateReviewMutation,
} = stayManagerApi;

export default stayManagerApi;
