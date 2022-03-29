import React from 'react';
import { Link } from 'react-router-dom';

function Logout() {
    return (
        <div>
            <Link to="/Login" className='btn btn-primary'>Logout</Link>
        </div>
    );
}

export default Logout;
