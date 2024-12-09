import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: "",
  user: {},
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.user = user;
      state.isLogin = true;
    },
    logout(state) {
      state.accessToken = "";
      state.user = {};
      state.isLogin = false;
    },
    updateUser(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;

export default authSlice.reducer;
