import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/authSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})