// store/store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/counterSlice'  // ✅ default import

export const store = configureStore({
  reducer: {
    counter: counterReducer  // ✅ not counterSlice
  }
})
