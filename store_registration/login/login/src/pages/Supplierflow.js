import React from 'react';
import { Link } from 'react-router-dom';

function Supplierflow() {
    return (
        <div>
            <div className="navbar">
                <div className='rightSide'>
                    <Link to="/supplierflow">Home</Link>
                    <Link to="/supplier/profile">Profile</Link>
                    <Link to="/supplier/details">Product Details</Link>
                    <Link to="/Login">Logout</Link>
                </div>
            </div>
        </div>
    );
}

export default Supplierflow;
