import React, { Children, useEffect, useState } from 'react';
import { Navigate,useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
function Protected({ route }) {
    const state = useSelector((state) => {
        return state.admin.isLogin
    })
  const token=localStorage.getItem('')
    const location=useLocation()
if(token){
    return route
}
        
return (
       <Navigate to="/login" state={{from:location}}replace />
     )
}
export default Protected;
