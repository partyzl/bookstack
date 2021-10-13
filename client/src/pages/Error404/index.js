import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="body">
            <h2 className="display-1">Oops!</h2>
            <h1 className="display-6"><small>It seems you may be a little lost. Click <NavLink exact to='/'>here</NavLink> to sign up or login!</small></h1>
        </div>
    )
}

export default Error404;