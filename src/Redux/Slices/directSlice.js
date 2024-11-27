import { createSlice } from "@reduxjs/toolkit";

// Data
const data = [
  {
    username: "john_doe",
    userimage: `https://randomuser.me/api/portraits/men/${
      Math.floor(Math.random() * 30) + 1
    }.jpg`,
    message: "Hello!",
  },
  {
    username: "jane_smith",
    userimage: `https://randomuser.me/api/portraits/men/${
      Math.floor(Math.random() * 30) + 1
    }.jpg`,
    message: "Hi there!",
  },
  {
    username: "michael_brown",
    userimage: `https://randomuser.me/api/portraits/men/${
      Math.floor(Math.random() * 30) + 1
    }.jpg`,
    message: "Good morning!",
  },
  {
    username: "emily_jones",
    userimage: `https://randomuser.me/api/portraits/men/${
      Math.floor(Math.random() * 30) + 1
    }.jpg`,
    message: "How are you?",
  },
  {
    username: "david_wilson",
    userimage: `https://randomuser.me/api/portraits/men/${
      Math.floor(Math.random() * 30) + 1
    }.jpg`,
    message: "What's up?",
  },
  {
    username: "sarah_davis",
    userimage: `https://randomuser.me/api/portraits/men/${
      Math.floor(Math.random() * 30) + 1
    }.jpg`,
    message: "Hey!",
  },
  {
    username: "chris_martin",
    userimage: `https://randomuser.me/api/portraits/men/${
      Math.floor(Math.random() * 30) + 1
    }.jpg`,
    message: "Good evening!",
  },
  {
    username: "laura_clark",
    userimage: `https://randomuser.me/api/portraits/men/${
      Math.floor(Math.random() * 30) + 1
    }.jpg`,
    message: "Nice to meet you!",
  },
  {
    username: "james_lewis",
    userimage: `https://randomuser.me/api/portraits/men/${
      Math.floor(Math.random() * 30) + 1
    }.jpg`,
    message: "How's it going?",
  },
  {
    username: "linda_walker",
    userimage: `https://randomuser.me/api/portraits/men/${
      Math.floor(Math.random() * 30) + 1
    }.jpg`,
    message: "See you later!",
  },
];

const initialState = {
  messages: data,
  loading: false,
  error: null,
};

const directSlice = createSlice({
  name: "direct",
  initialState,
  reducers: {
    fetchMessagesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMessagesSuccess(state, action) {
      state.loading = false;
      state.messages = action.payload;
    },
    fetchMessagesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    sendMessage(state, action) {
      state.messages.push(action.payload);
    },
  },
});

export const {
  fetchMessagesStart,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  sendMessage,
} = directSlice.actions;

export default directSlice.reducer;
