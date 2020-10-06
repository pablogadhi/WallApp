import React from "react";
import { initialState } from "../../features/auth/authSlice";
import { render, screen } from "../../test-utils";
import TopBar from "./TopBar";

const dummyAuthState = {
  username: "testuser",
  token: "8451faketoken744#",
};

describe("topbar component", () => {
  it("should display the username when the user has logged in", () => {
    render(<TopBar></TopBar>, { preloadedState: { auth: dummyAuthState } });
    expect(screen.getByText("testuser")).toBeInTheDocument();
  });

  it("should display the login button when the user hasn't logged in yet", () => {
    render(<TopBar></TopBar>, { preloadedState: { auth: initialState } });
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
