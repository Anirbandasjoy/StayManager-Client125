import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  allNoticeResponse,
  allUserResponse,
  bookinCencelRequest,
  bookingCencelResponse,
  bookingRequest,
  bookingResponse,
  CommentCreateResponse,
  CommentRequest,
  createBookingRequest,
  createBookingRequestResponse,
  createReviewRequest,
  createReviewResponse,
  curretUserResponse,
  deleteNoticeRequest,
  deleteNoticeResponse,
  existBookingRequest,
  existBookingResponse,
  findAllPortalResponse,
  findAllRoomsResponse,
  findRoomReviewRequest,
  findRoomReviewResponse,
  findSaveNotice,
  findSingleRoomRequest,
  findSingleRoomResponse,
  GetNoticeCommentResponse,
  loginRequest,
  loginResponse,
  logOutResponse,
  NoticeCommentRequest,
  portaAccepetRequest,
  portalAccepetRespone,
  portalRequestCreateResponse,
  ProcessRegistrationRequest,
  processRegistrationResponse,
  registrationRequest,
  registrationResponse,
  roomsData,
  saveNoticeRequest,
  saveNoticeResponse,
  singleUserRequest,
  singleUserResponse,
  updateAccountPassowrdResponse,
  updateAccoutPasswordRequest,
  updateNoticeRequest,
  updateNoticeResponse,
  updateUserInformationRequest,
  updateUserInformationResponse,
  userAllBookingRequestResponse,
} from "@/helper/type";

// const BaseUrl = "http://localhost:5000/api/v1";
const BaseUrl = "https://staymanager-server404.vercel.app/api/v1";

const stayManagerApi = createApi({
  reducerPath: "stayManagerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BaseUrl,
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
    logOut: builder.mutation<logOutResponse, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),

    googleLogin: builder.query({
      query: () => "/auth/google",
    }),

    // user api
    currentUser: builder.query<curretUserResponse, void>({
      query: () => "/user/current-user",
    }),
    singleUser: builder.query<singleUserResponse, singleUserRequest>({
      query: ({ profileId }) => `/user/find-single-user/${profileId}`,
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
    updateUserInformation: builder.mutation<
      updateUserInformationResponse,
      updateUserInformationRequest
    >({
      query: ({
        name,
        phone,
        address,
        profileImage,
        department,
        birthdate,
      }) => ({
        url: "/user/update-userInfo",
        method: "PUT",
        body: { name, phone, address, profileImage, department, birthdate },
      }),
    }),
    updateAccountPassword: builder.mutation<
      updateAccountPassowrdResponse,
      updateAccoutPasswordRequest
    >({
      query: ({ oldPassword, newPassword, confrimPassword }) => ({
        url: "/user/update-password",
        method: "PATCH",
        body: { oldPassword, newPassword, confrimPassword },
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
    updateNotice: builder.mutation<updateNoticeResponse, updateNoticeRequest>({
      query: ({ id, caption, noticeImage }) => ({
        url: `/notice/update-notice/${id}`,
        method: "PUT",
        body: { caption, noticeImage },
      }),
    }),
    findSingleNotice: builder.query({
      query: (id) => `/notice/find-single-notice/${id}`,
    }),

    findSaveNotice: builder.query<findSaveNotice, void>({
      query: () => "/save/find-notice",
    }),

    // Rooms create Api
    createRooms: builder.mutation<void, roomsData>({
      query: (roomsData) => ({
        url: "/room/create",
        method: "POST",
        body: roomsData,
      }),
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
    findRoomReview: builder.query<
      findRoomReviewResponse,
      findRoomReviewRequest
    >({
      query: ({ roomId }) => `/review/find-review/${roomId}`,
    }),
    // booking api
    createBookingRequest: builder.mutation<
      createBookingRequestResponse,
      createBookingRequest
    >({
      query: ({ id, sitNumber }) => ({
        url: `/booking/booking-request/${id}`,
        method: "POST",
        body: { sitNumber },
      }),
    }),

    cencelRequest: builder.mutation({
      query: ({ id, sitNumber }) => ({
        url: `/booking/cencel-request/${id}`,
        method: "DELETE",
        body: { sitNumber },
      }),
    }),
    booking: builder.mutation<bookingResponse, bookingRequest>({
      query: ({ id }) => ({
        url: `/booking/booking-room/${id}`,
        method: "PUT",
      }),
    }),

    existBookingRequest: builder.query<
      existBookingResponse,
      existBookingRequest
    >({
      query: ({ roomId }) => `/booking/exist-request/${roomId}`,
    }),

    cencelBookingRequest: builder.mutation<
      bookingCencelResponse,
      bookinCencelRequest
    >({
      query: ({ roomId }) => ({
        url: `/booking/cencel-request/${roomId}`,
        method: "PATCH",
      }),
    }),

    userALlBookingRequest: builder.query<userAllBookingRequestResponse, void>({
      query: () => "/booking/user-allBooking-request",
    }),
    findAllBookingRequest: builder.query<userAllBookingRequestResponse, void>({
      query: () => "/booking/findAll-booking-request",
    }),

    findSingleBooking: builder.query({
      query: (bookingId) => `/booking/find-single/${bookingId}`,
    }),

    // portal api request
    createPortalJoinRequest: builder.mutation<
      portalRequestCreateResponse,
      void
    >({
      query: () => ({
        url: "/portal/portal-join-request",
        method: "POST",
      }),
    }),
    findAllPostalRequest: builder.query<findAllPortalResponse, void>({
      query: () => ({
        url: "/portal/findAll-portalRequest",
        method: "GET",
      }),
    }),
    accepetPortalRequest: builder.mutation<
      portalAccepetRespone,
      portaAccepetRequest
    >({
      query: ({ userId }) => ({
        url: `/portal/accept-portal-joinRequest/${userId}`,
        method: "PATCH",
      }),
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
  useFindRoomReviewQuery,
  useCreateBookingRequestMutation,
  useLogOutMutation,
  useExistBookingRequestQuery,
  useUpdateNoticeMutation,
  useFindSingleNoticeQuery,
  useUserALlBookingRequestQuery,
  useSingleUserQuery,
  useFindAllBookingRequestQuery,
  useBookingMutation,
  useCencelBookingRequestMutation,
  useUpdateUserInformationMutation,
  useUpdateAccountPasswordMutation,
  useCreateRoomsMutation,
  useCreatePortalJoinRequestMutation,
  useFindAllPostalRequestQuery,
  useAccepetPortalRequestMutation,
  useCencelRequestMutation,
  useFindSingleBookingQuery,
} = stayManagerApi;

export default stayManagerApi;
