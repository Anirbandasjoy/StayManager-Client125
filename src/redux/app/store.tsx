import { configureStore } from "@reduxjs/toolkit";
import stayManagerApi from "../api/baseApi";
import socketReducer from "../features/socketSlice";

export const store = configureStore({
  reducer: {
    [stayManagerApi.reducerPath]: stayManagerApi.reducer, // API slice
    socket: socketReducer, // Add the socket slice here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stayManagerApi.middleware), // Combine default middleware and API middleware
});

// Export the store's dispatch type (AppDispatch) for use in thunks
export type AppDispatch = typeof store.dispatch;
