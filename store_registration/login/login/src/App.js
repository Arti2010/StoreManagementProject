import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Footer from './component/Footer'
import AdminHome from './pages/AdminHome';
import SalesHome from './pages/SalesHome';
import SupplierHome from './pages/SupplierHome';
import userList from "./component/admin/UserList"
import adduser from "./component/admin/AddUser"
import UserDetails from './pages/UserProfile';
import categoryDetails from './pages/CategoryDetails';
import ProductDetails from './pages/ProductDetails';
import addOrUpdateProduct from './pages/AddOrUpdateProduct'
import AddCategory from './pages/AddCategory';
import UpdateUser from './pages/UpdateUser';
import Help from './pages/Help';
import ProductDetailforSupply from './pages/ProductDetailforSupply';
import AddProdSupplyDetails from './pages/AddProdSupplyDetails';
import SupplierDetailForProduct from './pages/SupplierDetailForProduct';
import ShowSupplierDetails from './pages/ShowSupplierDetails';
import SupplierProfile from './pages/SupplierProfile';
import ForSupplierProductDetails from './pages/ForSupplierProductDetails';
import UpdateSupplier from './pages/UpdateSupplier';

function App() {
    return (
        <div className="App">
            <Router>
                {/* <Navigation /> */}
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/Login" exact component={Login} />
                    <Route path="/Signup" exact component={Register} />
                    <Route path="/adminflow" exact component={AdminHome} />
                    <Route path="/salesflow" exact component={SalesHome} />
                    <Route path="/supplierflow" exact component={SupplierHome} />
                    <Route exact path="/api/admin" component={userList} />
                    <Route path="/admin/add" component={adduser} />
                    <Route path="/users/edit/:userId" component={adduser} />
                    {/* <Route path="/sales/profile/:id" component={{ Salesflow }} /> */}
                    <Route path="/sales/profile/:Id" exact component={UserDetails} />
                    <Route path="/sales/category" exact component={categoryDetails} />
                    <Route path="/sales/cat-prod/:catId" component={ProductDetails} />
                    <Route path="/sales/product/add" component={addOrUpdateProduct} />
                    <Route path="/sales/product/update/:productId" component={addOrUpdateProduct} />
                    <Route path="/sales/category/add" exact component={AddCategory} />
                    <Route path="/salesman/user/update/:Id" exact component={UpdateUser} />
                    <Route path="/sales/help" exact component={Help} />
                    <Route path="/sales/supply" exact component={ProductDetailforSupply} />
                    <Route path="/sales/product-Supply/add" exact component={AddProdSupplyDetails} />
                    <Route path="/sales/product-Supply/add/:productId" exact component={AddProdSupplyDetails} />
                    <Route path="/sales/supply-pro/add" exact component={SupplierDetailForProduct} />
                    <Route path="/salesman/prod-supplier/:productId" exact component={ShowSupplierDetails} />
                    <Route path="/supplier/profile/:id" exact component={SupplierProfile} />
                    <Route path="/supplier/product/details/:id" exact component={ForSupplierProductDetails} />
                      <Route path="/salesman/supplier/update/:Id" exact component={UpdateSupplier} />
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;