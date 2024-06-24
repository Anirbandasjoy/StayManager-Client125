import { configureStore } from "@reduxjs/toolkit";
import stayManagerApi from "../api/baseApi";

export const store = configureStore({
  reducer: {
    [stayManagerApi.reducerPath]: stayManagerApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stayManagerApi.middleware),
});
