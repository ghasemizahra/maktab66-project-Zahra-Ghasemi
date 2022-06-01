import React from 'react'
import Admin from '../Layouts/Admin';
import image from '../Assest/Images/terminal_mellat.png'
import {Navigate} from 'react-router-dom'

 function Payment() {
  return (
    <>
    <div>Payment</div>
    <img src={image}  width="50%" height="50%"/>
    <button onClick={ Navigate('/success')} className='btnp'>پرداخت</button>
    <button className='btnE'>انصراف</button>

    </>
  )
}
export default Admin(Payment)
