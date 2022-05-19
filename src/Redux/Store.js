import { configureStore } from '@reduxjs/toolkit'
 import adminRdcer from './Reducer'
 import orderSlice from './orderSlice'
// import loginSlice from './LoginSlice'
import ProductSlice from './ProductSlice'
import CardidSlice from './CardidSlice'



//  import dataSlice from './Reducerdata'
const store= configureStore({
  reducer: {
    // isLogin: loginSlice,

    admin: adminRdcer,
    order:orderSlice,
    product:ProductSlice,
    cardid:CardidSlice

  },
})

export default store
