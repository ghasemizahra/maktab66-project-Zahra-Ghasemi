import React, { Children, useEffect, useState } from 'react';
import { Navigate,useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
function Protected({ route }) {
    const state = useSelector((state) => {
        return state.admin.isLogin
    })
    const token=localStorage.getItem('token')
    const location = useLocation()
    console.log(state,"sss")
if(!token){
    return <Navigate to="/login" state={{from:location}} />
}    
return (
    route   
     )
}
export default Protected;
