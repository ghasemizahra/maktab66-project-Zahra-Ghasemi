import React from 'react';
import HeaderAdmin from '../Components/HeaderAdmin'

function Admin(Component) {
    return function Withadmin({...props}) {
        return (
            <>			
            <div><HeaderAdmin/></div>

                <Component {...props} />
            </>
        )
    }
}
export default Admin