import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./Slices/authSlice";
import homeSlice from "./Slices/homeSlice";
import profileSlice from "./Slices/profileSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    home: homeSlice,
    profile: profileSlice,
  },
});
