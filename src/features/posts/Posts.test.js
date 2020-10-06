import React from "react";
import postsReducer, {
  initialState,
  fetchPosts,
  createPost,
} from "./postsSlice";
import { initialState as authInitialState } from "../auth/authSlice";
import { render, screen } from "../../test-utils";
import PostList from "./PostList";
import PostCreator from "./PostCreator";

const dummyPosts = [...Array(5).keys()].map((i) => ({
  content: `Testing the content of post #${i}`,
  posted_by: "testuser",
  time: "2020-10-05",
}));

describe("posts reducer", () => {
  it("should set the posts list", () => {
    const action = {
      type: fetchPosts.fulfilled.type,
      payload: dummyPosts,
    };

    expect(postsReducer(initialState, action)).toEqual({
      ...initialState,
      list: dummyPosts,
      status: "succeeded",
    });
  });

  it("should add a new post", () => {
    const newDummyPost = {
      content: "This is another post!",
      posted_by: "testuser2",
      time: "2020-10-06",
    };

    const action = { type: createPost.fulfilled.type, payload: newDummyPost };

    expect(
      postsReducer({ ...initialState, list: dummyPosts }, action).list
    ).toEqual([...dummyPosts, newDummyPost]);
  });
});

describe("postList component", () => {
  it("should display the post list", () => {
    // scrollIntoView is not implemented on jsdom and doesn't work
    // with jest, that's why we need to mock it.
    window.HTMLElement.prototype.scrollIntoView = function () {};

    render(<PostList></PostList>, {
      preloadedState: {
        posts: { ...initialState, list: dummyPosts, status: "succeeded" },
      },
    });
    dummyPosts.forEach((post) => {
      expect(screen.getByText(post.content)).toBeInTheDocument();
    });
  });
});

describe("postCreator component", () => {
  it("should be disabled if the user hasn't logged in yet", () => {
    render(<PostCreator></PostCreator>, {
      preloadedState: { auth: authInitialState },
    });
    expect(screen.getByRole("group")).toBeDisabled();
  });

  it("should be enabled if the store has the user's auth data", () => {
    const dummyAuthState = {
      username: "testuser2",
      token: "#845u4token7444",
      loginStatus: "succeeded",
    };
    render(<PostCreator></PostCreator>, {
      preloadedState: { auth: dummyAuthState },
    });
    expect(screen.getByRole("group")).toBeEnabled();
  });
});
