import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Form.css';

function Register() {
    const matchPass = () => {
        let pass = document.getElementById("wpass").value;
        let cpass = document.getElementById("cpass").value;
        
        if (pass == null || pass == "" || pass.trim().length == 0) {
            return false;
        }

        else {
            if(cpass == null || pass == "" || cpass.trim().length == 0) {
                return false;
            }
            else {
                if(pass == cpass)
                    return true;
                else {
                    alert("PASSWORD NOT MATCHED");
                    cpass.style.boxshadow = "-1px -1px red";
                    return false;
                }
            }
        }
    };

    const changeForm = () => {
        // <Route to='/Login'></Route>
    };

    const verifyName = () => {
        let fname = document.getElementById("fname").value;
    };

    const validateForm = () => {
        let pass = matchPass();
    //    let name = verifyName();

        if(pass)
            return true;
        else    
            return false;
    };

    let red = {color: "red"};
    let padleft = {paddingLeft: "20px"};

    return (
        <>
        <div className="contains">
            <div className = "info">
                <div className= "sign_text">
                    
                    <br />
                    <button type="button" id="accbtn"><Link style={{textDecoration:'none'}} to='/Login'><b>Have an Account</b></Link></button>
                </div>
            </div>

            <div id = "signup">
                <form onSubmit={validateForm} style={padleft} className="sign_form" method="post">
                    <h2 style={{color:"rgb(71, 167, 231)"}}>REGISTRATION FORM</h2>
                    <table className="signtable">
                        <tr>
                            <td>First Name<span style={red}>*</span></td>
                            <td style={padleft}>Last Name<span style={red}>*</span></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" id="firstname" className="fname" name="register" required autoFocus />
                            </td>
                            <td  style={padleft}>
                                <input type="text" id="lastname" className="fname" name="register" required />
                            </td>
                        </tr><tr></tr>
                        <tr>
                            <td colSpan="2">Email<span style={red}>*</span></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="text" id="mail" className = "usermail" name="register" required />
                            </td>
                        </tr><tr></tr>
                        <tr>
                            <td colSpan="2">Company Name<span style={red}>*</span></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <input type="text" id="comp" className = "comp" name="register" required />
                            </td>
                        </tr><tr></tr>
                        <tr>
                            <td>Password<span style={red}>*</span></td>
                            <td  style={padleft}>Confirm Password<span style={red}>*</span></td>
                        </tr>
                        <tr>
                            <td>
                                <input type="password" id="wpass" className="pass" name="register" required />
                            </td>
                            <td  style={padleft}>
                                <input type="password" id="cpass" className="pass" name="register" required />
                                <br />
                            </td>
                        </tr>
                        <tr><td><br /></td></tr>
                    
                        <tr>
                            <td><p id="invalidentry"></p></td>
                        </tr>
                        <tr>
                            <td><Link to="/Login">
                                <input type="submit" value="Register" id="registerbtn" name="register" />
                                </Link>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
        </>
    );
}

export default Register;