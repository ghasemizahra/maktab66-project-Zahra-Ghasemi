import React from 'react';
import Header from '../Components/Header'

function User(Component) {
    return function WithchekC({...props}) {
        return (
            <>			
            <div><Header/></div>

                <Component {...props} />
            </>
        )
    }
}
export default User