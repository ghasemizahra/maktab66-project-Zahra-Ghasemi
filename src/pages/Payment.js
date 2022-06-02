import React from 'react'
import Admin from '../Layouts/Admin';
import image from '../Assest/Images/terminal_mellat.png'
import {Link} from 'react-router-dom'
import {button} from "@mui/material";

 function Payment() {
 
  return (
    <>
    <div>Payment</div><img src={image}  width="50%" height="50%"/>
    <Link to="/success">
     <button className='btnp' type="button">
         پرداخت
     </button>
 </Link>   
 <Link to="/fault">
     <button className='btnE' type="button">
         انصراف
     </button>
 </Link> 
    </>
  )
}
export default Admin(Payment)
