import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postsReducer from "../features/posts/postsSlice";
import authReducer from "../features/auth/authSlice";

const persistConfig = {
  key: "auth",
  storage,
  blacklist: ["signupStatus"],
};

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: persistReducer(persistConfig, authReducer),
  },
});

export const persistor = persistStore(store);
