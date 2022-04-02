import React from 'react';
import { Link } from 'react-router-dom';

function Supplierflow() {
    let text = sessionStorage.getItem("validated_date");
    let obj = JSON.parse(text);
    let x = obj.id;
    let id = parseInt(x);
    console.log(typeof (id));
    return (
        <div>
            <div className="navbar">
                <div className='rightSide'>
                    <Link to="/supplierflow">Home</Link>
                    <Link to={`/supplier/profile/${id}`}>Profile</Link>
                    <Link  to={`/supplier/product/details/${id}`}>Product Details</Link>
                    <Link to="/Login">Logout</Link>
                </div>
            </div>
        </div>
    );
}

export default Supplierflow;
