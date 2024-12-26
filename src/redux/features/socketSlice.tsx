import { User } from "@/helper/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { io, Socket } from "socket.io-client";
import { AppDispatch } from "../app/store";

interface SocketState {
  socket: Socket | null | any;
  onlineUsers: User[];
}

const initialState: SocketState = {
  socket: null,
  onlineUsers: [],
};

const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    setSocket: (state, action: PayloadAction<Socket | null>) => {
      state.socket = action.payload;
    },
    setOnlineUsers: (state, action: PayloadAction<User[]>) => {
      state.onlineUsers = action.payload;
    },
    clearSocket: (state) => {
      state.socket = null;
      state.onlineUsers = [];
    },
  },
});

export const initializeSocket = (authUser: User) => (dispatch: AppDispatch) => {
  if (authUser) {
    const socket = io("http://localhost:5000", {
      query: { userId: authUser._id },
    });

    dispatch(setSocket(socket));

    socket.on("getOnlineUsers", (users: User[]) => {
      dispatch(setOnlineUsers(users));
    });

    socket.on("disconnect", () => {
      dispatch(clearSocket());
    });

    return () => {
      socket.close();
      dispatch(clearSocket());
    };
  } else {
    dispatch(clearSocket());
  }
};

export const { setSocket, setOnlineUsers, clearSocket } = socketSlice.actions;

export default socketSlice.reducer;
