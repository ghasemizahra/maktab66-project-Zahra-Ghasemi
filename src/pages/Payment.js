import React from 'react'
import Admin from '../Layouts/Admin';
import image from "../Assest/Images/terminal_mellat.png"
 function Payment() {
  return (
    <>
    <div>Payment</div>
    <img src={image}  width="50%" height="50%"/>
    <button className='btnp'>پرداخت</button>
    <button className='btnE'>انصراف</button>

    </>
  )
}
export default Admin(Payment)