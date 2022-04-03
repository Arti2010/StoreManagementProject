import React from 'react';
import { useState } from 'react';
import { useEffect } from "react/cjs/react.development";
import { Link, useHistory, useParams } from 'react-router-dom';
import SalesmanService from '../service/SalesmanService';

import Supplierflow from './Supplierflow'
import httpClient from '../http-coomon';
import '../styles/ForSupplierProductDetails.css';

const ForSupplierProductDetails = () => {
  //   let text = sessionStorage.getItem("category_details");
  //   console.log("printing is prlo", text);
  //   let obj = JSON.parse(text);
  //   console.log("preinting obj ", obj)
  //   let x = obj[0].catName;


  const [style, setStyle] = useState("cont");

  //   console.log(typeof (x));
  //   console.log("printing catName", x);

  const history = useHistory();
  const { id } = useParams();
  //   let y = catId.toString();
  //   console.log("printing tostringofcatid", y);
  // console.log(typeOf(y));
  //   sessionStorage.setItem("cat_Id", y);
  // const { catid} = useParams();

  //     const [catName, setcatName] = useState('');
  //   const [catType, setcatType] = useState('');
  //   const [catDesc, setcatDesc] = useState('');
  const [products, setProduct] = useState([]);

  const init = () => {
    SalesmanService.getProductbySupplierId(id)
      .then(response => {
        console.log('Printing category data', response.data);
        setProduct(response.data);


      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  useEffect(() => {
    init();
  }, []);

  const ChangeStatus = (id) => {
    const data = new FormData();
    data.append('productId', id);


    console.log('Printing id', id);

    httpClient.post(`/supplier/status/`, data)
      .then(response => {
        console.log('product status changed successfully', response.data);
        setStyle("cont2");
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    <div>
      <Supplierflow />

      <div className="container">
        <br /><br />
        <h3>List of Products to Supply</h3>
        <hr />
        <div>
          {/* <Link to={`/sales/product/add`} className="btn btn-primary mb-2">Add Product</Link> */}

          <table className="table table-bordered table-striped">
            <thead >

              <tr>
                <th>prodDesc</th>
                <th>prodPrice</th>
                <th>prodQty</th>
                <th>productName</th>

                <th>finalPrice</th>
                <th>Status</th>
                <th>Actions</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(product => (
                  <tr key={product.id}>
                    <td>{product.prodDesc}</td>
                    <td>{product.prodPrice}</td>
                    <td>{product.prodQty}</td>
                    <td>{product.productName}</td>

                    <td>{product.finalPrice}</td>
                    <td className={style} style={{ color: "white" }}>{product.status}</td>

                    <td>

                      <button className="btn btn-info" onClick={() => {
                        ChangeStatus(product.id);
                      }}>Change Status</button></td>
                    <td>

                      <Link className="btn btn-info" to={`/supplier/complete/details/2`}>Address To deliver</Link></td>
                  </tr>
                ))
              }
            </tbody>
          </table>

        </div>
        {/* <Link to={`/sales/category`}>Back to List</Link> */}
      </div>
    </div>
  );





}


export default ForSupplierProductDetails;