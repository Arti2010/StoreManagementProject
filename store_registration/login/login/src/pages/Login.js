import React, { useEffect, useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import '../styles/Form.css';
import userService from "../service/UserService"
import Navigation from "../component/Navigation";
import Swal from 'sweetalert2'

function Login(props) {

    const [name, setname] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            // history.push("/add")
        }
    }, [])



    function login() {
        console.warn(email, password);
        const userdetails = { email, password };
        userService.authenticate(userdetails)
            .then(response => {
                console.log("user is validated", response.data);
                sessionStorage.setItem("validated_date", JSON.stringify(response.data.result));
                if (response.data.result.role === "ADMIN") {
                    history.push("/adminflow");
                    //alert('Admin login successful!!');
                    Swal.fire({
                        icon: 'success',
                        //title: 'Oops...',
                        text: 'Admin Login Successful!!'
                    })
                }
                else if (response.data.result.role === "SALESMAN") {
                    history.push("/salesflow");
                    //alert('Salesman login successful!!');
                    Swal.fire({
                        icon: 'success',
                        //title: 'Oops...',
                        text: 'Seller Login Successful!!'
                    })
                }
                else if (response.data.result.role === "SUPPLIER") {
                    history.push("/supplierflow");
                    //alert('Supplier login successful!!');
                    Swal.fire({
                        icon: 'success',
                        //title: 'Oops...',
                        text: 'Supplier Login Successful!!'
                    })
                }
            })
            .catch(error => {
                console.log('something went wrong', error);
                //alert('Login failed!! Invalid email or password');
                Swal.fire({
                    icon: 'error',
                    title: 'Try again!!',
                    text: 'Invalid email or password!'
                })
            })

    }

    let red = { color: "red" };
    let padleft = { paddingLeft: '30px' };

    return (
        <>
            <Navigation />
            <div className="contains">
                <div className="info">
                    <div className="sign_text">
                        <h3>New User?</h3>

                        <br />
                        <button type="button" id="accbtn"><Link style={{ textDecoration: 'none' }} to='/Signup'><b>Register</b></Link></button>
                    </div>
                </div>
                <div id="signin">
                    <div className="sign_form" style={padleft} method="post">
                        {/* <form className="sign_form" style={padleft} method='post'> */}
                        <h2 style={{ color: "rgb(71, 167, 231)" }}>LOGIN</h2>
                        <table>
                            <tr><td>Email<span style={red}>*</span> </td></tr>
                            <tr><td><input type="text" className="usermail" name="login" required autoFocus autoComplete="off" onChange={(e) => setEmail(e.target.value)} /></td></tr>
                            <tr><td><br /></td></tr>
                            <tr><td>Password<span style={red}>*</span> </td></tr>
                            <tr><td><input type="password" className="userpass" name="login" required autoComplete="off" onChange={(e) => setPassword(e.target.value)} /></td></tr>
                            <tr><td><br /><br /></td></tr>
                        </table>
                        <input id="loginbtn" name="login" value="LOGIN" onClick={login} />
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </>
    );

}

export default Login;