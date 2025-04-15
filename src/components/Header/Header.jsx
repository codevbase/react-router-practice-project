import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <nav>
                <h1>Header</h1>
                <Link to="/">Home</Link>
                {/* <Link to="/footer">Footer</Link> */}
                <Link to="/blogs">Blogs</Link>
                <Link to="/users">Users</Link>
            </nav>
        </div>
    );
};

export default Header;