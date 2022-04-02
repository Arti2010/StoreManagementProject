import React from 'react';
import { useState } from 'react';
import { useEffect } from "react/cjs/react.development";
import { Link, useHistory, useParams } from 'react-router-dom';
import SalesmanService from '../service/SalesmanService';
import Salesflow from './Salesflow';


const ProductDetailforSupply = () => {
  //   let text = sessionStorage.getItem("category_details");
  //   console.log("printing is prlo", text);
  //   let obj = JSON.parse(text);
  //   console.log("preinting obj ", obj)
  //   let x = obj[0].catName;




  //   console.log(typeof (x));
  //   console.log("printing catName", x);

  //   const history = useHistory();
  //   const { catId } = useParams();
  //   let y = catId.toString();
  //   console.log("printing tostringofcatid", y);
  //   // console.log(typeOf(y));
  //   sessionStorage.setItem("cat_Id", y);
  // const { catid} = useParams();

  //     const [catName, setcatName] = useState('');
  //   const [catType, setcatType] = useState('');
  //   const [catDesc, setcatDesc] = useState('');
  const [products, setProduct] = useState([]);

  const init = () => {
    SalesmanService.getAllProductForSupply()
      .then(response => {
        console.log('Printing product data', response.data);
        setProduct(response.data);

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
    SalesmanService.remove(id)
      .then(response => {
        console.log('product deleted successfully', response.data);
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
        <h3>List of Products </h3>
        <hr />
        <div>
          <h3>Add product for supply</h3>
          <Link to={`/sales/product-Supply/add`} className="btn btn-primary mb-2">Add Product</Link>

          <table className="table table-bordered table-striped">
            <thead >

              <tr>

                <th>prodPrice</th>
                <th>prodQty</th>
                <th>productName</th>
                <th>finalPrice</th>
                <th>Status</th>
                <th>Supplier Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(product => (
                  <tr key={product.id}>

                    <td>{product.prodPrice}</td>
                    <td>{product.prodQty}</td>
                    <td>{product.productName}</td>

                    <td>{product.finalPrice}</td>
                    <td>{product.status}</td>
                    <td>
                      <Link className="btn btn-info" to={`/salesman/prod-supplier/${product.id}`}>ShowDetails</Link>
                      {/* <button className="btn btn-danger ml-2" onClick={() => {
                        handleDelete(product.id);
                      }}>ShowDetails</button> */}
                    </td>
                    <td>
                      {/* <Link className="btn btn-info" to={`/sales/product/update/${product.id}`}>Update</Link> */}
                      <button className="btn btn-danger ml-2" onClick={() => {
                        handleDelete(product.id);
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


export default ProductDetailforSupply;