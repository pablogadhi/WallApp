import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authenticate, signUp } from "../../api/client";

export const authUser = createAsyncThunk("auth/authUser", authenticate);
export const registerUser = createAsyncThunk("auth/registerUser", signUp);

const initialState = {
  username: "",
  token: "",
  loginStatus: "empty",
  signupStatus: "empty",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    stateCleaned: (state) => initialState,
    signupStatusReseted: (state) => {
      state.signupStatus = "empty";
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
    },
  },
});

export const { stateCleaned, signupStatusReseted } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
