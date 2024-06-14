import { createSlice } from '@reduxjs/toolkit'


 export const checktoken = ( )=>{
  return localStorage.getItem("authenToken") || null; //vérifie si il y a un token
}

export const authenSlice = createSlice({
  name: 'authen',
  initialState: {
    token : checktoken(),
    isAuthenticated : false
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true; // L'utilisateur est connecté
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    logOut: state => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("authenToken");
    },
    loginFail: (state, action) => {
      state.loginFail= action.payload.error
    }
  }
})

// Action creators are generated for each case reducer function
export const { loginSuccess, logOut, loginFail } = authenSlice.actions

export default authenSlice.reducer