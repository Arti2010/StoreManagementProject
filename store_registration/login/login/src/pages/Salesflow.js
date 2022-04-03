import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../styles/Salesflow.css';

function Salesflow() {
    let text = sessionStorage.getItem("validated_date");
    let obj = JSON.parse(text);
    let x = obj.id;
    let id = parseInt(x);
    console.log(typeof (id));
    // let text=sessionStorage.getItem("validated_date");

    return (

        <>
            <div className='navbar'>
                <div className='rightSide'>
                    <Link to="/salesflow" className="nav-link">Home </Link>
                    <Link to={`/sales/profile/${id}`} className="nav-link">Show Profile </Link>
                    <Link to={`/sales/Complete/profile/${id}`} className="nav-link">Fill Complete Profile </Link>
                    <Link to="/sales/category" className="nav-link">Stock </Link>
                    <Link to="/sales/supply" className="nav-link">Supply </Link>
                    <Link to="/sales/help" className="nav-link">Help </Link>
                    <Link to="/Login" className="nav-link">Logout </Link>
                </div>

            </div>

        </>


    );
}

export default Salesflow;
