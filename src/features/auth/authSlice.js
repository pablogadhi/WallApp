import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authenticate, signUp } from "../../api/client";

export const authUser = createAsyncThunk("auth/authUser", authenticate);
export const registerUser = createAsyncThunk("auth/registerUser", signUp);

export const initialState = {
  username: "",
  token: "",
  loginStatus: "empty",
  signupStatus: "empty",
  signupError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    stateCleaned: (state) => initialState,
    statusReset: (state) => {
      state.signupStatus = "empty";
      state.loginStatus = "empty";
    },
  },
  extraReducers: {
    [authUser.pending]: (state, action) => {
      state.loginStatus = "authenticating";
    },
    [authUser.fulfilled]: (state, action) => {
      state.loginStatus = "succeeded";
      state.username = action.payload.username;
      state.token = action.payload.token;
    },
    [authUser.rejected]: (state, action) => {
      state.loginStatus = "failed";
    },
    [registerUser.pending]: (state, action) => {
      state.signupStatus = "creating";
    },
    [registerUser.fulfilled]: (state, action) => {
      state.signupStatus = "succeeded";
    },
    [registerUser.rejected]: (state, action) => {
      state.signupStatus = "failed";
      state.signupError = Object.values(action.payload)[0][0];
    },
  },
});

export const { stateCleaned, statusReset } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
