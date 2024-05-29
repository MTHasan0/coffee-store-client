import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from './Header';

const Users = () => {

    const users = useLoaderData();
    

    return (
        <div>
        <Header></Header>
            {
                users.map(user=><p key={user._id}>Email:{user.email} Password:{user.password}</p>)
            }
        </div>
    );
};

export default Users;