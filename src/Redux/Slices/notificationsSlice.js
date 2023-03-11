import { createSlice } from "@reduxjs/toolkit";

const data = [
  {
    title: "New",
    actions: [
      {
        type: "liked",
        username: "JohnDoe",
        userImage: "https://randomuser.me/api/portraits/men/1.jpg",
        time: "2h",
        postImage: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        type: "commented",
        username: "JohnDoe",
        userImage: "https://randomuser.me/api/portraits/men/1.jpg",
        time: "4h",
        postImage: "https://randomuser.me/api/portraits/men/1.jpg",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  {
    title: "This Week",
    actions: [
      {
        type: "liked",
        username: "JohnDoe",
        userImage: "https://randomuser.me/api/portraits/men/1.jpg",
        time: "1d",
        postImage: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      {
        type: "mentioned",
        username: "JohnDoe",
        userImage: "https://randomuser.me/api/portraits/men/1.jpg",
        time: "3d",
        postImage: "https://randomuser.me/api/portraits/men/1.jpg",
        comment: "@mucahitsah hello",
      },
      {
        type: "requestedToFollow",
        username: "JohnDoe",
        userImage: "https://randomuser.me/api/portraits/men/1.jpg",
        time: "2d",
      },
    ],
  },
];

const initialState = {
  notifications: data,
  loading: false,
  error: null,
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {},
});

export default notificationsSlice.reducer;
