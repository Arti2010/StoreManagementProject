import React from 'react';
import { useState } from 'react';
import { useEffect } from "react/cjs/react.development";
import { Link, useHistory, useParams } from 'react-router-dom';
import SalesmanService from '../service/SalesmanService';
import PersonIcon from '@material-ui/icons/Person';
import Salesflow from './Salesflow';

const CategoryDetails = () => {

  //     const [catName, setcatName] = useState('');
  //   const [catType, setcatType] = useState('');
  //   const [catDesc, setcatDesc] = useState('');
  const [categories, setcategories] = useState([]);


  const init = () => {
    SalesmanService.getAllCat()
      .then(response => {
        console.log('Printing category data', response.data);
        console.log('Printing category name data', response.data.catName);
        setcategories(response.data);
        // console.log(categories);
        sessionStorage.setItem("category_details", JSON.stringify(response.data));
        console.log('Printing javascript object', JSON.stringify(response.data));
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }



  useEffect(() => {
    init();
  }, []);
  const handleDelete = (id) => {
    console.log('Printing id', id);
    SalesmanService.removeCategory(id)
      .then(response => {
        console.log('category deleted successfully', response.data);
        init();
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
        <h3>List of categories</h3>
        <hr />
        <div>
          <Link to={`/sales/category/add`} className="btn btn-primary mb-2">Add category</Link>
          {/* <Link to="/admin/add" className="btn btn-primary mb-2">Add User</Link>
        <table className="table table-bordered table-striped"> */}
          <table className="table table-bordered table-striped">
            <thead >

              <tr>
                <th>catName</th>
                <th>catType</th>
                <th>catDesc</th>
                <th>Show Product</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody>
              {
                categories.map(category => (
                  <tr key={category.id}>
                    <td>{category.catName}</td>
                    <td>{category.catType}</td>
                    <td>{category.catDesc}</td>

                    <td>
                      <Link className="btn btn-info" to={`/sales/cat-prod/${category.id}`}>Select</Link>

                      {/* <button className="btn btn-danger ml-2" onClick={() => {
                      handleDelete(user.id);
                    }}>Delete</button> */}
                    </td>
                    <td><button className="btn btn-danger ml-2" onClick={() => {
                      handleDelete(category.id);
                    }}>Delete</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );





}


export default CategoryDetails;