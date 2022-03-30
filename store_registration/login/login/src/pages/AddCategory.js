import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import SalesmanService from "../service/SalesmanService";
import Salesflow from "./Salesflow";

const AddCategory = () => {
    const [catName, setcatName] = useState('');
    const [catType, setcatType] = useState('');
    const [catDesc, setcatDesc] = useState('');



    // let text = sessionStorage.getItem("category_details");
    // console.log("printing is prlo" ,text);
    // let obj = JSON.parse(text);
    // console.log("preinting obj ",obj)
    // let x = obj[0].catName;
    // let catid =obj[0].id;
    // console.log("printing id ",catid);
    //  setcatId(obj[0].id);

    // let catNewName=sessionStorage.getItem("catName");
    // console.log("printing catnew Mane ",catNewName);
    // console.log(typeof (catNewName));
    // console.log(typeof (x));
    // console.log("printing catName",x);


    const history = useHistory();
    // const { productId } = useParams();
    // const { catid} = useParams();
    // console.log("printing catid by useparam",catid);
    const saveCategory = (e) => {

        e.preventDefault();


        const category = { catName, catType, catDesc }



        //creat
        console.log(category);
        SalesmanService.AddCategory(category)
            .then(response => {
                console.log("category added successfully", response.data);
                history.push("/sales/category");
            })
            .catch(error => {
                console.log('something went wroing', error);
                // console.log(product);
            })

    }

    useEffect(() => {


    }, [])

    return (
        <div>
            <Salesflow />
            <div className="container">
                <h3>Add Category</h3>
                <hr />
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="catName"
                            value={catName}
                            onChange={(e) => setcatName(e.target.value)}
                            placeholder="Enter catName" autoComplete="off"
                        />

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="catType"
                            value={catType}
                            onChange={(e) => setcatType(e.target.value)}
                            placeholder="Enter catType" autoComplete="off"
                        />

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="catDesc"
                            value={catDesc}
                            onChange={(e) => setcatDesc(e.target.value)}
                            placeholder="Enter catDesc" autoComplete="off"
                        />
                    </div>

                    <div >
                        <button onClick={(e) => saveCategory(e)} className="btn btn-primary">Save</button>
                    </div>
                </form>
                <hr />
                <Link to={`/sales/category`}>Back to List</Link>
                {/* <Link to={`/sales/cat-prod/${catId}`}>Back to List</Link> */}
                {/* <button onClick={history.push('/sales/cat-prod/'+x)} className="btn btn-primary">Back to List</button> */}
            </div>
        </div>
    )
}

export default AddCategory;