import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    username: null,
    id: null,
    accessToken: null,
    error: null
  },
  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setId: (store, action) => {
      store.id = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    }
  }
});

export default user;
