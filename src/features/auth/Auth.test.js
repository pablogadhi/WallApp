import authReducer, {
  authUser,
  initialState,
  stateCleaned,
  signupStatusReseted,
} from "./authSlice";

describe("auth reducer", () => {
  const dummyState = {
    username: "testuser",
    token: "#8452testtoken7411",
    loginStatus: "succeeded",
    signupStatus: initialState.signupStatus,
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

  it("should clean the signupStatus", () => {
    expect(
      authReducer(
        { ...dummyState, signupStatus: "succeeded" },
        signupStatusReseted
      )
    ).toEqual(dummyState);
  });
});
