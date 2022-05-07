import React from 'react'
import { useNavigate } from 'react-router-dom'
import User from '../Layouts/User'

 function Detail() {
  const navigate = useNavigate()
   function handleAdd(){
    return navigate('/cart')
   }
  return (
    <div>
        <p>عکس محصول</p>
        <p>اطلاعات محصول</p>
        <button  onClick={handleAdd}>افزودن به سبد خرید</button>
    </div>
  )
}
export default User(Detail)
