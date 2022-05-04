import React, { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

function Protected({ route }) {
    const [islogin, setIslogin] = useState(true)
    function cheklogin() {
        // setIslogin(true)
    }

    return (
        islogin == true ? route : <Navigate to="/login" replace />
    );
}

export default Protected;
