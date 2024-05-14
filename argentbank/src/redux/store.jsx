import {configureStore} from '@reduxjs/toolkit'
import authenReducer from './features/authSlice'
import profileReducer from './features/profileSlice'

export default configureStore({
  reducer: {
    authen: authenReducer,
    profile : profileReducer 
  }
})