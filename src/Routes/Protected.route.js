import React, { Children, useEffect, useState } from 'react';
import { Navigate,useLocation } from "react-router-dom";
import { useSelector } from 'react-redux'
function Protected({ route }) {
    const state = useSelector((state) => {
        return state.admin.isLogin
    })
    console.log(state,"sss")

    // function cheklogin() {
    //     // setIslogin(true)
    // }
    console.log(state);
    const location=useLocation()
if(!state){
    return <Navigate to="/login" state={{from:location}}replace />
}
        
return (
    route   
     )
}
export default Protected;
