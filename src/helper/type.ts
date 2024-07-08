import internal from "stream";

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
  success: boolean,
  message: string,
  payload: {
    token: string,
  }
}

export interface ProcessRegistrationRequest {
  name: string,
  email: string,
  password: string,
  phone: string,
  profileImage: string
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
    role: string;
    createAt: string;
    updatedAt: string;
  };
}

export interface registrationResponse {
  success: boolean,
  message: string,
  payload: {}
}

export interface registrationRequest {
  token: string
}

interface User {
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
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Notice {
  _id: string,
  caption: string,
  author: string | User,
  noticeImage: string | null
}


interface Comment {
  _id : string
  text : string,
  commentImage : string | null,
  user : string | User,
  notice : string | Notice
  createdAt : string,
  updatedAt : string

}

interface Notification {
  _id : string,
  read : boolean,
  seen : boolean,
  author : string | User,
  notice : string | Notice,
  date : string,
  createdAt : string,
  updatedAt : string

}

export interface CommentCreateResponse {
  success : boolean,
  message : string,
  payload : {
    newComment : Comment,
    newNotification : Notification
  }
}

export interface CommentRequest  {
  noticeId : string,
  inputStr : string,
  selectedImage : string | null
}

interface Pagination {
  totalUsers: number;
  totalPage: number;
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



export interface allNoticeResponse {
  success: boolean,
  message: string,
  payload: {
    _id: string,
    caption: string,
    noticeImage: string,
    author: User
  }[] 

}



export type DateTimeFormatOptions = {
  month?: "long" | "numeric" | "2-digit" | "short" | "narrow";
  day?: "numeric" | "2-digit";
  hour?: "numeric" | "2-digit";
  minute?: "numeric" | "2-digit";
  hour12?: boolean;
};
