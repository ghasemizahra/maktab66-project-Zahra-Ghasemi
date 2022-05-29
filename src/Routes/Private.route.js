import React, { Children, useEffect, useState } from 'react';
import { Navigate,useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
function PrivateRoute({ route }) {
    const state = useSelector((state) => {
        return state.admin.isLogin
    })
  
if(state){
    return <Navigate to="/paneladmin"  />
}    
return (
    route   
     )
}
export default PrivateRoute;
