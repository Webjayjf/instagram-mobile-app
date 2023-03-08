import { createSlice } from "@reduxjs/toolkit";

const user = {
  username: "mucahitsah",
  userImage:
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  displayName: "Mücahit Şahin",
  email: "johndoe@gmail.com",
  bio: "Software Engineer",
  posts: [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "mucahitsah",
      userImage:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "mucahitsah",
      userImage:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      username: "mucahitsah",
      userImage:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
  ],
  followers: [],
  following: [],
};

const initalState = {
  user: user,
  loading: false,
  error: null,
  focusPost: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initalState,
  reducers: {
    setFocusPost: (state, action) => {
      state.focusPost = action.payload;
    },
  },
});

export const { setFocusPost } = profileSlice.actions;

export default profileSlice.reducer;
