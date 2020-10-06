import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPosts, makeNewPost } from "../../api/client";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", getAllPosts);
export const createPost = createAsyncThunk("posts/createPost", makeNewPost);

export const initialState = {
  list: [],
  status: "empty",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
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
    },
    [createPost.fulfilled]: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts.list;
export const selectStatus = (state) => state.posts.status;

export default postsSlice.reducer;
