import { configureStore } from '@reduxjs/toolkit'
 import adminRdcer from './Reducer'
//  import dataReducer from '../Reducer/DataReducer'
const store= configureStore({
  reducer: {
    admin: adminRdcer,
  },
})

export default store