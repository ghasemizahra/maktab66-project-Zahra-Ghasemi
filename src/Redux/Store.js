import { configureStore } from '@reduxjs/toolkit'
 import adminRdcer from './Reducer'
 import orderSlice from './orderSlice'


//  import dataSlice from './Reducerdata'
const store= configureStore({
  reducer: {
    admin: adminRdcer,
    order:orderSlice,

  },
})

export default store