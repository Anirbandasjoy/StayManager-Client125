export interface loginRequest {
  email: string;
  password: string;
}

export interface loginResponse {
  success: boolean;
  message: string;
  payload: {
    _id: string;
    name: string;
    email: string;
    password: string;
    profileImage: string;
    backgroundImage: string;
    phone: string;
    address: string;
    department: string;
    role: string;
    createAt: string;
    updatedAt: string;
  };
}

export interface processRegistrationResponse {
  success: boolean;
  message: string;
  payload: {
    token: string;
  };
}

export interface ProcessRegistrationRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  profileImage: string;
}

export interface curretUserResponse {
  success: boolean;
  message: string;
  payload: {
    _id: string;
    name: string;
    email: string;
    password: string;
    profileImage: string;
    backgroundImage: string;
    phone: string;
    address: string;
    department: string;
    birthdate: string;
    googleId: string;
    githubId: string;
    role: string;
    createAt: string;
    updatedAt: string;
  };
}

export interface updateUserInformationResponse {
  success: boolean;
  statusCode: number;
  message: string;
}

export interface updateUserInformationRequest {
  name: string;
  profileImage: string;
  address: string;
  phone: string;
  department: string;
  birthdate: string;
}

export interface registrationResponse {
  success: boolean;
  message: string;
  payload: {};
}

export interface registrationRequest {
  token: string;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  profileImage: string;
  backgroundImage: string;
  phone: string;
  address: string;
  department: string;
  role: string;
  birthdate: string | Date | any;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface updateAccountPassowrdResponse {
  success: boolean;
  statusCode: number;
  message: string;
}

export interface updateAccoutPasswordRequest {
  oldPassword: string;
  newPassword: string;
  confrimPassword: string;
}

export interface singleUserResponse {
  success: boolean;
  statusCode: number;
  message: string;
  payload: {
    _id: string;
    name: string;
    email: string;
    password: string;
    profileImage: string;
    backgroundImage: string;
    birthdate: string;
    phone: string;
    address: string;
    department: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export interface singleUserRequest {
  profileId: string;
}

export interface Notice {
  _id: string;
  caption: string;
  author: User;
  noticeImage: string;
  createdAt: string;
  updatedAt: string;
}

export interface updateNoticeResponse {
  success: boolean;
  stausCode: number;
  message: string;
}

export interface updateNoticeRequest {
  id: string;
  caption: string;
  noticeImage: string;
}

export interface findSingleNoticeResponse {
  success: boolean;
  statusCode: number;
  message: string;
  payload: {
    _id: string;
    caption: string;
    noticeImage: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface findSingleNoticeRequest {
  id: string;
}

interface Comment {
  _id: string;
  text: string;
  commentImage: string | null;
  user: string | User;
  notice: string | Notice;
  createdAt: string;
  updatedAt: string;
}

interface Notification {
  _id: string;
  read: boolean;
  seen: boolean;
  author: string | User;
  notice: string | Notice;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface CommentCreateResponse {
  success: boolean;
  message: string;
  payload: {
    newComment: Comment;
    newNotification: Notification;
  };
}

export interface CommentRequest {
  noticeId: string | null;
  inputStr: string;
  selectedImage: string | null;
}

export interface GetNoticeCommentResponse {
  success: boolean;
  message: string;
  payload: {
    _id: string;
    text: string;
    commentImage: string;
    user: User;
    notice: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[];
}

export interface NoticeCommentRequest {
  noticeId: string | null;
}
interface Pagination {
  totalUsers: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}

export interface allUserResponse {
  success: boolean;
  message: string;
  payload: {
    users: User[];
    pagination: Pagination;
  };
}

export interface findAllUserRequest {
  searchValue: string;
  page: number;
  limit: number;
}

export interface allNoticeResponse {
  success: boolean;
  message: string;
  payload: {
    _id: string;
    caption: string;
    noticeImage: string;
    author: User;
  }[];
}

export interface deleteNoticeResponse {
  success: boolean;
  message: string;
}

export interface deleteNoticeRequest {
  noticeId: string;
}

// save notice

export interface saveNoticeRequest {
  notice: string;
}

export interface saveNoticeResponse {
  success: boolean;
  message: string;
  payload: {
    _id: string;
    user: string;
    notice: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface findSaveNotice {
  success: boolean;
  message: string;
  payload: {
    _id: string;
    user: User;
    notice: Notice;
  }[];
}

export interface findAllRoomsResponse {
  success: boolean;
  message: string;
  payload: {
    _id: string;
    sitRent: number;
    roomImage: string;
    sitOne: User;
    sitTwo: User;
    sitThere: User;
    createdAt: string;
    updatedAt: string;
  }[];
}

interface Room {
  _id: string;
  sitRent: number;
  roomImage: string;
  sitOne: User | string | null;
  sitTwo: User | string | null;
  sitthree: User | string | null;
  createdAt: string;
  updatedAt: string;
}

export interface findSingleRoomResponse {
  success: boolean;
  message: string;
  payload: {
    _id: string;
    sitRent: number;
    roomImage: string;
    sitOne: User;
    sitTwo: User;
    sitThere: User;
    createdAt: string;
    updatedAt: string;
  };
}

export interface findSingleRoomRequest {
  id: string;
}

// room review types

export interface createReviewResponse {
  success: boolean;
  message: string;
}

export interface createReviewRequest {
  roomId: string;
  message: string;
  rating: string | number | null;
}

export interface findRoomReviewResponse {
  success: boolean;
  message: string;
  payload: {
    _id: string;
    message: string;
    rating: number;
    user: User;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface findRoomReviewRequest {
  roomId: string;
}

// booking types

export interface createBookingRequestResponse {
  success: boolean;
  message: string;
}

export interface createBookingRequest {
  id: string;
  sitNumber: number;
}

export interface existBookingResponse {
  success: boolean;
  stausCode: number;
  message: string;
  payload: {
    _id: string;
    user: User;
    room: Room;
    status: string;
    sitNumber: number;
    createdAt: string;
    updatedAt: string;
  };
}

export interface existBookingRequest {
  roomId: string;
}

export interface userAllBookingRequestResponse {
  success: boolean;
  statusCode: number;
  message: string;
  payload: {
    _id: string;
    user: User;
    room: Room;
    sitNumber: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface bookingResponse {
  success: boolean;
  statusCode: number;
  message: string;
}

export interface bookingRequest {
  id: string;
}

export interface bookingCencelResponse {
  success: boolean;
  statusCode: number;
  message: string;
}

export interface bookinCencelRequest {
  roomId: string;
}

// Portal types

export interface portalRequestCreateResponse {
  _id: string;
  user: string;
  status: string;
}

export interface findAllPortalResponse {
  success: boolean;
  statusCode: number;
  payload: {
    _id: string;
    user: User;
    status: string;
    createdAt: string;
  }[];
}

export interface portalAccepetRespone {
  success: boolean;
  statusCode: number;
  message: string;
}

export interface portaAccepetRequest {
  userId: string;
}

// auth types

export interface logOutResponse {
  success: boolean;
  message: string;
}

// appearance types

export interface createAppearaceRequest {
  font: string;
  language: string;
  theme: string;
}

export interface createAppearanceResponse {
  statusCode: number;
  message: string;
}

export interface findAppearanceResponse {
  statusCode: number;
  message: string;
  payload: {
    font: string;
    language: string;
    theme: string;
    user: string;
  };
}

export type DateTimeFormatOptions = {
  month?: "long" | "numeric" | "2-digit" | "short" | "narrow";
  day?: "numeric" | "2-digit";
  hour?: "numeric" | "2-digit";
  minute?: "numeric" | "2-digit";
  hour12?: boolean;
};

export interface roomsData {
  sitRent: string;
  roomImage: any;
}
