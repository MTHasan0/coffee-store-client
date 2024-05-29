import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full justify-center flex gap-6 m-5'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/sign-in'>Sign In</NavLink>
            <NavLink to='/add-coffee'>Add Coffee</NavLink>
        </div>
    );
};

export default Header;