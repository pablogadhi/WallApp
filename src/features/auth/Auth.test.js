import authReducer, {
  authUser,
  initialState,
  stateCleaned,
  statusReset,
} from "./authSlice";

describe("auth reducer", () => {
  const dummyState = {
    ...initialState,
    username: "testuser",
    token: "#8452testtoken7411",
    loginStatus: "succeeded",
  };

  it("should set the auth info", () => {
    const action = {
      type: authUser.fulfilled.type,
      payload: { username: "testuser", token: "#8452testtoken7411" },
    };

    expect(authReducer(initialState, action)).toEqual(dummyState);
  });

  it("should clean the whole auth state", () => {
    expect(authReducer(dummyState, stateCleaned)).toEqual(initialState);
  });

  it("should clean the signupStatus and loginStatus", () => {
    expect(
      authReducer({ ...dummyState, signupStatus: "succeeded" }, statusReset)
    ).toEqual({ ...dummyState, loginStatus: "empty", signupStatus: "empty" });
  });
});
