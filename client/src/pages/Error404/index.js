import React from 'react';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <div className="body">
            <h1> Oops!</h1>
            <h4>It seems you may be a little lost. Click <NavLink exact to='/'>here</NavLink> to sign up or login!</h4>
        </div>
    )
}

export default Error404;