import { configureStore } from "@reduxjs/toolkit"
import loginStatusSlice from "./loginStatusSlice"

const store = configureStore({
  reducer: {
    loginStatus: loginStatusSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;

export default store;