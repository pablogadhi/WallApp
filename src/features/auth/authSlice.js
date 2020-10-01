import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authenticate } from "../../api/client";

export const authUser = createAsyncThunk("auth/authUser", authenticate);

const initialState = {
  username: "",
  token: "",
  status: "empty",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    stateCleaned: (state) => initialState,
  },
  extraReducers: {
    [authUser.pending]: (state, action) => {
      state.status = "authenticating";
    },
    [authUser.fulfilled]: (state, action) => {
      state.status = "succeeded";
      console.log(action.payload);
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    [authUser.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { stateCleaned } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
