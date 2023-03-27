import { createSlice } from "@reduxjs/toolkit";

import homeData from "../Data/homeData";
import homeStories from "../Data/homeStories";

const initialState = {
  stories: homeStories,
  posts: homeData,
  isLoading: false,
  error: null,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default homeSlice.reducer;
