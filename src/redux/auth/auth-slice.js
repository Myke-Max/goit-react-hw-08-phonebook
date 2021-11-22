import { createSlice } from '@reduxjs/toolkit';
import authOperetions from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefresh: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperetions.newUser.fulfilled](state, action) {
      state.user = action?.payload?.user;
      state.token = action?.payload?.token;
      state.isLoggedIn = true;
    },
    [authOperetions.logIn.fulfilled](state, action) {
      state.user = action?.payload?.user;
      state.token = action?.payload?.token;
      state.isLoggedIn = true;
    },
    [authOperetions.logout.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.isLoggedIn = null;
      state.token = null;
    },
    [authOperetions.getCurrentUser.pending](state, _) {
      state.isRefresh = true;
    },
    [authOperetions.getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefresh = false;
    },
    [authOperetions.getCurrentUser.rejected](state, _) {
      state.isRefresh = false;
    },
  },
});

export default authSlice.reducer;
