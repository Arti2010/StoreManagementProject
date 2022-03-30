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
import Salesflow from './pages/Salesflow';
import Supplierflow from './pages/Supplierflow';
import userList from "./component/admin/UserList"
import adduser from "./component/admin/AddUser"

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
                    <Route path="/salesflow" exact component={Salesflow} />
                    <Route path="/supplierflow" exact component={Supplierflow} />
                    <Route exact path="/api/admin" component={userList} />
                    <Route path="/admin/add" component={adduser} />
                    <Route path="/users/edit/:userId" component={adduser} />
                    {/* <Route path="/sales/profile/:id" component={{ Salesflow }} /> */}

                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;