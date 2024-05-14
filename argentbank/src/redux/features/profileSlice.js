import { createSlice } from '@reduxjs/toolkit'


export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    firsteName : '',
    lastName : '',
    userName : '',
    email : '',
  },
  reducers: {
    setProfile: (state, action) => {
      state.firsteName = action.payload.body.firsteName;
      state.lastName = action.payload.body.lastName;
      state.userName = action.payload.body.userName;
      state.email = action.payload.body.email; 
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