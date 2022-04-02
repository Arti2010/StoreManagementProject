import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import SalesmanService from "../service/SalesmanService";
import Salesflow from "./Salesflow";
import Swal from 'sweetalert2'

const AddProdSupplyDetails = () => {
    const [id, setId] = useState('');
    const [prodDesc, setprodDesc] = useState('');
    const [prodPrice, setprodPrice] = useState('');
    const [prodQty, setprodQty] = useState('');
    const [productName, setproductName] = useState('');
    const [discount, setdiscount] = useState('');
    const [finalPrice, setfinalPrice] = useState('');
    // const [catId, setcatId] = useState('');


    // let text = sessionStorage.getItem("category_details");
    // console.log("printing is prlo", text);
    // let obj = JSON.parse(text);
    // console.log("preinting obj ", obj)
    // let x = obj[0].catName;
    // let catid =obj[0].id;
    // console.log("printing id ",catid);
    //  setcatId(obj[0].id);

    // let catNewName = sessionStorage.getItem("cat_Id");
    // let catid = parseInt(catNewName);
    // console.log("printing catnew Mane ", catid);
    // console.log(typeof (catid));
    // console.log(typeof (x));
    // console.log("printing catName", x);


    const history = useHistory();
    // const { productId } = useParams();
    // const { catid} = useParams();
    // console.log("printing catid by useparam", catid);
    const { productId } = useParams();
    const saveProduct = (e) => {

        e.preventDefault();


        const product = { id, prodDesc, prodPrice, prodQty, productName, discount, finalPrice };


        //creat
        console.log(product);
        SalesmanService.saveProductForSupply(product)
            .then(response => {
                console.log("product added successfully", response.data);
                history.push('/sales/product-Supply/add' + product.id);
                sessionStorage.setItem("product_id", response.data);
                console.log(response.data);
                console.log("printing in add product for supply", typeof (response.data));

                Swal.fire({
                    icon: 'success',
                    //title: 'Oops...',
                    text: 'Product Added Successfully!!'
                })
            })
            .catch(error => {
                console.log('something went wrong', error);
                console.log(product);
            })

    }

    useEffect(() => {
        if (productId) {
            SalesmanService.getProduct(productId)
                .then(product => {
                    console.log(product);
                    setId(productId);
                    setprodDesc(product.data.prodDesc);
                    setprodPrice(product.data.prodPrice);
                    setprodQty(product.data.prodQty);
                    setproductName(product.data.productName);
                    setdiscount(product.data.discount);
                    setfinalPrice(product.data.finalPrice);

                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
        //     else {
        //         setcatId(catid);
        //     }
    }, [])

    return (
        <div>
            <Salesflow />
            <div className="container">
                <h3>Add Product for supply</h3>
                <hr />
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="prodDesc"
                            value={prodDesc}
                            onChange={(e) => setprodDesc(e.target.value)}
                            placeholder="Enter prodDesc" autoComplete="off"
                        />

                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control col-4"
                            id="prodPrice"
                            value={prodPrice}
                            onChange={(e) => setprodPrice(e.target.value)}
                            placeholder="Enter prodPrice" autoComplete="off"
                        />

                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control col-4"
                            id="prodQty"
                            value={prodQty}
                            onChange={(e) => setprodQty(e.target.value)}
                            placeholder="Enter prodQty" autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="productName"
                            value={productName}
                            onChange={(e) => setproductName(e.target.value)}
                            placeholder="Enter productName" autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control col-4"
                            id="discount"
                            value={discount}
                            onChange={(e) => setdiscount(e.target.value)}
                            placeholder="Enter discount" autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control col-4"
                            id="finalPrice"
                            value={finalPrice}
                            onChange={(e) => setfinalPrice(e.target.value)}
                            placeholder="Enter finalPrice" autoComplete="off"
                        />
                    </div>
                    {/* <div className="form-group">
                     <input
                        type="number"
                        className="form-control col-4"
                        id="catId"
                        value={catid}
                        
                        placeholder="catid" autoComplete="off"
                    /> 
                </div>   */}
                    <div >
                        <button onClick={(e) => saveProduct(e)} className="btn btn-primary">Save</button>
                    </div>
                </form>
                <hr />
                <Link to={`/sales/supply`}>Back to List</Link><br />
                <h3>Add supplier for product</h3>
                <Link to={`/sales/supply-pro/add`} className="btn btn-primary mb-2">Add Supplier</Link>
            </div>
        </div>
    )
}

export default AddProdSupplyDetails;