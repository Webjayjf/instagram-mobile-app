import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./Slices/authSlice";
import exploreSlice from "./Slices/exploreSlice";
import homeSlice from "./Slices/homeSlice";
import notificationsSlice from "./Slices/notificationsSlice";
import profileSlice from "./Slices/profileSlice";
import directSlice from "./Slices/directSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    home: homeSlice,
    profile: profileSlice,
    notifications: notificationsSlice,
    explore: exploreSlice,
    direct: directSlice,
  },
});
