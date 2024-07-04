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

export type DateTimeFormatOptions = {
  month?: "long" | "numeric" | "2-digit" | "short" | "narrow";
  day?: "numeric" | "2-digit";
  hour?: "numeric" | "2-digit";
  minute?: "numeric" | "2-digit";
  hour12?: boolean;
};
