import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import '../styles/Salesflow.css';
import { Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserDetails from './UserProfile';
import categoryDetails from './CategoryDetails';
import ProductDetails from './ProductDetails';
import addOrUpdateProduct from './AddOrUpdateProduct'
import AddCategory from './AddCategory';
import UpdateUser from './UpdateUser';
import Logout from './Logout';


function Salesflow() {
    let text = sessionStorage.getItem("validated_date");
    let obj = JSON.parse(text);
    let x = obj.id;
    let id = parseInt(x);
    console.log(typeof (id));
    // let text=sessionStorage.getItem("validated_date");

    return (

        <div className='back'>
            <br />
            <Logout />
            <Router>

                <Row>
                    <Col md={4}>
                        <br /><br />

                        <nav className="nav flex-column">
                            <br />
                            <Link to={`/sales/profile/${id}`} className="nav-link">Show Profile </Link><br />
                            {/* <NavDropdown title="Stock" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/sales/category">Category</NavDropdown.Item>
                                <NavDropdown.Item href="/sales/product">Product</NavDropdown.Item>
                            </NavDropdown> */}
                            <Link to="/sales/category" className="nav-link">Stock </Link>
                            <br /><br /><br />
                            <Link to="/sales/supply" className="nav-link">Supply </Link><br /><br />
                            <Link to="/sales/expense" className="nav-link">Expenses </Link><br /><br />
                            <Link to="/sales/help" className="nav-link">Help </Link><br /><br /><br />
                        </nav>

                    </Col>
                    <Col md={8}>
                        <div className="SalesFlow">

                            <Route path="/sales/profile/:id" exact component={UserDetails} />
                            <Route path="/sales/category" exact component={categoryDetails} />
                            <Route path="/sales/cat-prod/:catId" component={ProductDetails} />
                            <Route path="/sales/product/add" component={addOrUpdateProduct} />
                            <Route path="/sales/product/update/:productId" component={addOrUpdateProduct} />
                            <Route path="/sales/category/add" exact component={AddCategory} />
                            <Route path="/salesman/user/update/:userId" exact component={UpdateUser} />


                        </div> </Col>
                </Row>

            </Router>

        </div>
    );
}

export default Salesflow;
