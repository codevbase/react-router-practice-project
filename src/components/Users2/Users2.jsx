import React, { use } from 'react';

const Users2 = ({ users2Promise }) => {

    const users = use(users2Promise);
    console.log('user2 suspense data ',users);
    return (
        <div>
            <h1>Users2</h1>
            
        </div>
    );
};

export default Users2;