import React from 'react';
import {  NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <nav>
                
                <NavLink to="/">Home</NavLink>
                {/* <Link to="/footer">Footer</Link> */}
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/users2">Users2</NavLink>
            </nav>
        </div>
    );
};

export default Header;