import React from 'react';
import { useState } from 'react';
import { useEffect } from "react/cjs/react.development";
import { Link, useHistory, useParams } from 'react-router-dom';
import SalesmanService from '../service/SalesmanService';
import PersonIcon from '@material-ui/icons/Person';
import Salesflow from './Salesflow';


const UserProfile = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [role, setrole] = useState('');
  const [password, setpassword] = useState('');
  const [phone, setphone] = useState('');

  const history = useHistory();
  const { id } = useParams();


  const user = { firstName, lastName, email, role, password, phone };

  useEffect(() => {
    SalesmanService.get(id)
      .then(user => {
        setfirstName(user.data.firstName);
        setlastName(user.data.lastName);
        setemail(user.data.email);
        setrole(user.data.role);
        setpassword(user.data.password);
        setphone(user.data.phone);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }, []
  )
  return (
    <div>
      <Salesflow />
      <div className='container'>
        <br /><br /><br /><br />
        <div className='navbar_sale'>
          <h3><PersonIcon fontSize='large' />

            User Profile</h3>
          <br />
        </div>
        <hr />
        <br />
        <div>
          <table style={{ width: '80%', fontSize: '25px', fontFamily: 'serif' }} >
            <thead className="thead-dark">
              <tr>
                <th>FirstName</th>
                <td>{user.firstName}</td>
              </tr>
              <tr>
                <th>LastName</th>
                <td>{user.lastName}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{user.email}</td>
              </tr>
              <tr>
                <th>Role</th>
                <td>{user.role}</td>
              </tr>
              <tr>
                <th>Phone</th>
                <td>{user.phone}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
      <Link to={`/salesman/user/update/${user.id}`}>Update </Link>
    </div>

  );
}

export default UserProfile;