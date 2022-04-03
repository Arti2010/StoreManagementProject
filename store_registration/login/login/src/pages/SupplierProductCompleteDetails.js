import React from 'react';
import { useState } from 'react';
import { useEffect } from "react/cjs/react.development";
import { Link, useHistory, useParams } from 'react-router-dom';
import SalesmanService from '../service/SalesmanService';
import PersonIcon from '@material-ui/icons/Person';
import Salesflow from './Salesflow';
import UserService from '../service/UserService';
import Supplierflow from './Supplierflow'


const SupplierProductCompleteDetails = () => {
//   const [id, setid]=useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [role, setrole] = useState('');
  const [password, setpassword] = useState('');
  const [phone, setphone] = useState('');

  const history = useHistory();
  const { Id } = useParams();


  const user = { firstName, lastName, email, role, password, phone };
const [userId, setUserId] = useState('');
    const [shopName, setshopName] = useState('');
    const [city, setcity] = useState('');
    const [zipCode, setzipCode] = useState('');
    const [state, setstate] = useState('');
    const [country, setcountry] = useState('');

    const address={shopName,city,zipCode,state,country,userId};

  useEffect(() => {
    UserService.getAddress(Id)
  .then(response => {
    console.log("in complete details", response.data);

    if(response.data !=null){
        setUserId(response.data.userId);
        setshopName(response.data.shopName);
        setcity(response.data.city);
        setzipCode(response.data.zipCode);
        setstate(response.data.state);
        setcountry(response.data.country);
        setfirstName(response.data.user.firstName);
        setlastName(response.data.user.lastName);
        setemail(response.data.user.email);
        setrole(response.data.user.role);
        setpassword(response.data.user.password);
        setphone(response.data.user.phone);
        
    }
    setUserId(Id);
    console.log(response.data.city);
    history.push('/supplier/complete/details/2');
})
.catch(error => {
    console.log('something went wroing', error);
    // console.log(product);
})
  }, []
  )
  return (
    <div>
      <Supplierflow />
      <div className='container'>
        <br /><br /><br /><br />
        <div className='navbar_sale'>
          <h3><PersonIcon fontSize='large' />

            Complete Details</h3>
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
                <th>Phone</th>
                <td>{user.phone}</td>
              </tr>
              <tr></tr>
              <tr>
                <th>Address</th>
                <td>
                <tr>
                    <th>Shopname</th>
                    <td>{address.shopName}</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>{address.city}</td>
                </tr>
                <tr>
                    <th>ZipCode</th>
                    <td>{address.zipCode}</td>
                </tr>
                <tr>
                    <th>State</th>
                    <td>{address.state}</td>
                </tr>
                <tr>
                    <th>Country</th>
                    <td>{address.country}</td>
                </tr>
               </td>
              </tr>
              
            </thead>
          </table>
        </div>
      </div>
      
    {/* <br/><br/><br/><br/> <Link className="btn btn-info" to={`/salesman/user/update/${Id}`}>Update</Link> */}
    </div>

  );
}

export default SupplierProductCompleteDetails;