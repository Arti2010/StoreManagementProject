// import React from 'react';
// import { useState } from 'react';
// import { useEffect } from "react/cjs/react.development";
// import { Link, useHistory, useParams } from 'react-router-dom';

// import PersonIcon from '@material-ui/icons/Person';
// import Salesflow from './Salesflow';

// import UserService from '../service/UserService'


// const ShowSupplierDetails = () => {
//     const [users, setusers] = useState([]);

//   const history = useHistory();
//   const { productId } = useParams();

//   // const [firstName, setfirstName] = useState('');
//   // const [lastName, setlastName] = useState('');
//   // const [email, setemail] = useState('');
//   // const [role, setrole] = useState('');
//   // const [password, setpassword] = useState('');
//   // const [phone, setphone] = useState('');


// //   const user = { firstName, lastName, email, phone };



//     const init = () => {
//         UserService.getAllSupplierBYProductId(productId)
//           .then(response => {
//             console.log('Printing users data', response.data);
//             setusers(response.data);
//             // console.log("Printing supplier details",users);
//             // console.log("printing supplier id",users.id);
//           })
//           .catch(error => {
//             console.log('Something went wrong', error);
//           })
//       }
//       //  const id=users[0].id;
//     //   const user = { firstName:users[0].firstName, lastName:users[0].lastName, email:users[0].email, role:users[0].role, password:users[0].password, phone:users[0].phone };

//     //   console.log("printing supplierdetails",user);
//     // console.log("printing id",id)
//       useEffect(() => {
//         init();
//       }, []);
//   return (
//      <div>
//        <Salesflow />
//        <div className="container">
//         <br /><br />
//         <h3>List of Suppliers</h3>
//         <hr />
//         <div>
//           {/* <Link to="/admin/add" className="btn btn-primary mb-2">Add User</Link> */}
//           <table className="table table-bordered table-striped">
//             <thead>
//               <tr>
//                 <th>FirstName</th>
//                 <th>LastName</th>
//                 <th>Email</th>

//                 <th>Phone</th>

//               </tr>
//             </thead>
//             <tbody>
//               {
//                 users.map(user => (
//                   <tr key={user.id}>
//                     <td>{user.firstName}</td>
//                     <td>{user.lastName}</td>
//                     <td>{user.email}</td>

//                     <td>{user.phone}</td>
//                     <td>
//                       {/* <Link className="btn btn-info" to={`/users/edit/${user.id}`}>Update</Link> */}
// {/* 
//                       <button className="btn btn-danger ml-2" onClick={() => {
//                         handleDelete(user.id);
//                       }}>Delete</button> */}
//                     </td>
//                   </tr>
//                 ))
//               }
//             </tbody>
//           </table>

//         </div>
//         <Link to={`/sales/supply`}>Back to List</Link><br/>
//       </div>

// </div>
//   );
// }

// export default ShowSupplierDetails;


import React from 'react';
import { useState } from 'react';
import { useEffect } from "react/cjs/react.development";
import { Link, useHistory, useParams } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import Salesflow from './Salesflow';
import UserService from '../service/UserService'


const ShowSupplierDetails = () => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setemail] = useState('');
  const [role, setrole] = useState('');
  const [password, setpassword] = useState('');
  const [phone, setphone] = useState('');

  const history = useHistory();
  const { productId } = useParams();


  const user = { firstName, lastName, email, role, password, phone };

  useEffect(() => {
    UserService.getAllSupplierBYProductId(productId)
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

            Supplier Profile</h3>
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

      {/* <br/><br/><br/><br/> <Link className="btn btn-info" to={`/users/edit/${user.id}`}>Update</Link> */}
    </div>

  );
}

export default ShowSupplierDetails;