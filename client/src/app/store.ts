import { configureStore } from "@reduxjs/toolkit";
import userIDSlice from "./userIDSlice";

const store = configureStore({
  reducer: {
    userID: userIDSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
