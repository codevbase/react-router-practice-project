import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>Users</h1>
            
        </div>
    );
};

export default Users;