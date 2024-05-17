import { createSlice } from '@reduxjs/toolkit'


export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    firstName : '',
    lastName : '',
    userName : '',
    email : '',
  },
  reducers: {
    setProfile: (state, action) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
      state.email = action.payload.email; 
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    updateProfile: (state, action) => {
      state.userName = action.payload
    },
    
  }
})

// Action creators are generated for each case reducer function
export const {setProfile, updateProfile } = profileSlice.actions

export default profileSlice.reducer