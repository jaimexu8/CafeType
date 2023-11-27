import { createSlice } from "@reduxjs/toolkit";

export const userIDSlice = createSlice({
  name: "userID",
  initialState: {
    value: -1,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = -1;
    },
  },
});

export const { login, logout } = userIDSlice.actions;
export default userIDSlice.reducer;
