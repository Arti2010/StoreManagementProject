import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import UserService from '../service/UserService';
import Salesflow from './Salesflow';
import httpClient from '../http-coomon';

const SupplierDetailForProduct = () => {


  let productId= parseInt(sessionStorage.getItem("product_id"));
  console.log("Printing in add supplier",productId);
  console.log("printing in add supplier for product",typeof(productId));


  const [users, setusers] = useState([]);
  const history = useHistory();

  const init = () => {
    UserService.getAllSupplier()
      .then(response => {
        console.log('Printing users data', response.data);
        setusers(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  useEffect(() => {
    init();
  }, []);

  const  AddSupplier = (id) => {
    console.log('Printing id', id);
    const data =new FormData();
    data.append('productId',productId);
    httpClient.post(`/salesman/supplier/product/${id}`,data)
      .then(response => {
        console.log('supplier added successfully', response.data);
        history.push('/sales/supply');
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div>
      <Salesflow />
      <div className="container">
        <br /><br />
        <h3>List of Supplier</h3>
        <hr />
        <div>
          {/* <Link to="/admin/add" className="btn btn-primary mb-2">Add User</Link> */}
          <table className="table table-bordered table-striped">
            <thead >
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => (
                  <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>

                    <td>
                    {/* <Link className="btn btn-info" to={`/salesman/pro-supplier/${user.id}`}>select</Link> */}

                      {/* <Link className="btn btn-info" to={`/users/edit/${user.id}`}>Update</Link> */}

                      <button className="btn btn-info" onClick={() => {
                        AddSupplier(user.id);
                      }}>select</button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>

        </div>
        <Link to={`/sales/supply`}>Back to List</Link><br/>
      </div>
    </div>

  );
}

export default SupplierDetailForProduct;

