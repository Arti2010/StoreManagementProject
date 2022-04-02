import React from 'react';
import { Link } from 'react-router-dom';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import '../styles/Adminflow.css';


function Adminflow() {

    // let text = sessionStorage.getItem("validated_date");
    // let obj = JSON.parse(text);
    // let name=obj.firstName;
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
