import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useEffect } from "react/cjs/react.development";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import '../styles/Adminflow.css';
import Login from '../pages/Login'

function Adminflow() {


    return (
        <div>
            <div className='navbar'>
                <AdminPanelSettingsIcon fontSize='large' sx={{ color: 'white' }} />
                <div className='rightSide'>
                    <Link to="/adminflow">Home</Link>
                    <Link to="/api/admin">Add User</Link>
                    <Link to="/Login">Logout</Link>
                </div>
            </div>

        </div>



    );
}

export default Adminflow;
