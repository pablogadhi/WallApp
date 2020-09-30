import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ content: "First Post!" }, { content: "Second Post!" }];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
