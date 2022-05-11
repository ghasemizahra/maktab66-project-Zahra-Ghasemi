import React, { Children, useEffect, useState } from 'react';
import { Navigate,useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
function Protected({ route }) {
    const state = useSelector((state) => {
        console.log(state,"sss")
        return state.admin.isLogin
    })
    // function cheklogin() {
    //     // setIslogin(true)
    // }
    console.log(state);
    const location=useLocation()
if(!state){
    return <Navigate to="/login" state={{from:location}}replace />
}
        // state == true ? route : <Navigate to="/login" replace />
        
return (
    route   
     )
}
export default Protected;
