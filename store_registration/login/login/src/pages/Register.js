import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Form.css';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
import UserService from '../service/UserService';
import Navigation from "../component/Navigation";
import '../styles/Form.css';
import Swal from 'sweetalert2'

function Register() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [phone, setPhone] = useState('')

    const history = useHistory()
    const matchPass = () => {
        let pass = document.getElementById("password").value;
        let cpass = document.getElementById("cpass").value;

        if (pass == null || pass == "" || pass.trim().length == 0) {
            return false;
        }

        else {
            if (cpass == null || pass == "" || cpass.trim().length == 0) {
                return false;
            }
            else {
                if (pass == cpass)
                    return true;
                else {
                    //alert("PASSWORD NOT MATCHED");
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Password does not match!!'
                    })
                    cpass.style.boxshadow = "-1px -1px red";
                    return false;
                }
            }
        }
    };

    // const changeForm = () => {
    //     // <Route to='/Login'></Route>
    // };

    // const verifyName = () => {
    //     let fname = document.getElementById("fname").value;
    // };

    const validateForm = () => {
        let pass = matchPass();
        //    let name = verifyName();


        let data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: role,
            phone: phone
        }
        console.log("printing data", data)
        if (pass) {
            UserService.registerUser(data).then(response => {
                // console.log('user data updated successfully', response.data);
                if (response.data == "Successfully Registered!!!") {
                    //alert("Successfully registered");
                    Swal.fire({
                        icon: 'success',
                        //title: 'Oops...',
                        text: 'User Successfully Registered!!'
                    })

                }
                else
                    //alert("Already registered");
                    Swal.fire({
                        icon: 'warning',
                        //title: 'Oops...',
                        text: 'User Already Registered!!'
                    })
                history.push('/Login');

            })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }



        else
            //alert("password not matched")
            Swal.fire({
                icon: 'warning',
                //title: 'Oops...',
                text: 'Please Enter the details!!'
            })
    };

    let red = { color: "red" };
    let padleft = { paddingLeft: "20px" };

    return (
        <>
            <Navigation />
            <div className="contains">
                <div className="info">
                    <div className="sign_text">

                        <br />
                        <button type="button" id="accbtn"><Link style={{ textDecoration: 'none' }} to='/Login'><b>Have an Account</b></Link></button>
                    </div>
                </div>

                <div id="signup">
                    {/* <form onSubmit={validateForm} style={padleft} className="sign_form" method="post"> */}
                    <h2 style={{ color: "rgb(71, 167, 231)" }}>&nbsp; &nbsp; REGISTRATION FORM</h2>
                    <table className="signtable">
                        <tr>
                            <td>&nbsp; &nbsp; First Name<span style={red}>*</span></td>
                            <td style={padleft}>&nbsp; &nbsp; Last Name<span style={red}>*</span></td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp; &nbsp;<input type="text" id="firstname" className="fname" name="register" autoComplete="off" required autoFocus onChange={(event) => {
                                    setFirstName(event.target.value)
                                }} />
                            </td>
                            <td style={padleft}>
                                &nbsp; &nbsp;<input type="text" id="lastname" className="fname" name="register" autoComplete="off" required onChange={(event) => {
                                    setLastName(event.target.value)
                                }} />
                            </td>
                        </tr><tr></tr>
                        <tr>
                            <td colSpan="2">&nbsp; &nbsp; Email<span style={red}>*</span></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                &nbsp; &nbsp;<input type="text" id="email" className="usermail" name="register" autoComplete="off" required onChange={(event) => {
                                    setEmail(event.target.value)
                                }} />
                            </td>
                        </tr><tr></tr>
                        <tr>
                            <td >&nbsp; &nbsp; role<span style={red}>*</span></td>
                            <td style={padleft}>&nbsp; &nbsp; PhoneNo<span style={red}>*</span></td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp; &nbsp;<input type="text" id="role" className="comp" name="register" autoComplete="off" required onChange={(event) => {
                                    setRole(event.target.value)
                                }} />
                            </td>

                            <td style={padleft}>
                                &nbsp; &nbsp;<input type="text" id="phone" className="pass" name="register" autoComplete="off" required onChange={(event) => {
                                    setPhone(event.target.value)
                                }} />
                            </td>

                        </tr><tr></tr>
                        <tr>
                            <td>&nbsp; &nbsp; Password<span style={red}>*</span></td>
                            <td style={padleft}>&nbsp; &nbsp; Confirm Password<span style={red}>*</span></td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp; &nbsp;<input type="password" id="password" className="pass" name="register" autoComplete="off" required onChange={(event) => {
                                    setPassword(event.target.value)
                                }} />
                            </td>
                            <td style={padleft}>
                                &nbsp; &nbsp;<input type="password" id="cpass" className="pass" name="register" required />
                                <br />
                            </td>
                        </tr>
                        {/* <tr>
                            <td>PhoneNo<span style={red}>*</span></td>
                            <td>
                                <input type="text" id="phone" className="pass" name="register" autoComplete="off" required onChange={(event) => {
                                    setPhone(event.target.value)
                                }} />
                            </td>

                        </tr> */}
                        <tr><td><br /></td></tr>

                        <tr>
                            <td><p id="invalidentry"></p></td>
                        </tr>
                        <tr>
                            <td>

                                &nbsp; &nbsp;<button onClick={validateForm} value="Register" id="registerbtn" name="register" >Register</button>

                            </td>
                        </tr>
                    </table>
                    {/* </form> */}
                </div>
            </div>
        </>
    );
}

export default Register;