import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPosts } from "../../api/client";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", getAllPosts);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    status: "empty",
    error: null,
  },
  reducers: {
    postAdded(state, action) {
      state.list.push(action.payload);
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.list = state.list.concat(action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      // state.error = action.error.message;
    },
  },
});

export const selectAllPosts = (state) => state.posts.list;
export const selectStatus = (state) => state.posts.status;

export default postsSlice.reducer;
