import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // !===================== Register ==============

    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.rejected](state, action) {
      state.error = action.payload;
    },

    // !===================== LogIn ==============

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected](state, action) {
      state.error = action.payload;
    },

    // !===================== LogOut ==============

    [logOut.fulfilled](state) {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected](state, action) {
      state.error = action.payload;
    },

    // !===================== refresh ==============
    [fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;

      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state, action) {
      state.isRefreshing = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
