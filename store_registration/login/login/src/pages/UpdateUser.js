import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import userService from "../service/UserService";
import Salesflow from "./Salesflow";

const UpdateUser = () => {
    const [id, setId] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [role, setrole] = useState('');
    const [password, setpassword] = useState('');
    const [phone, setphone] = useState('');


    const history = useHistory();
    const { userId } = useParams();

    const saveUser = (e) => {
        e.preventDefault();

        const user = { id, firstName, lastName, email, role, password, phone };
        if (userId) {
            //update
            userService.update(user)
                .then(response => {
                    console.log('user data updated successfully', response.data);
                    history.push('/sales/profile/' + userId);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
        // } else {
        //     //create
        //     userService.create(user)
        //         .then(response => {
        //             console.log("user added successfully", response.data);
        //             history.push("/api/admin");
        //         })
        //         .catch(error => {
        //             console.log('something went wroing', error);
        //         })
        // }
    }

    useEffect(() => {
        if (userId) {
            userService.get(userId)
                .then(user => {
                    setId(userId);
                    setfirstName(user.data.firstName);
                    setlastName(user.data.lastName);
                    setemail(user.data.email);
                    setrole(user.data.role);
                    setpassword(user.data.password);
                    setphone(user.data.phone);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return (
        <div>
            <Salesflow />

            <div className="container">
                <h3>Add user</h3>
                <hr />
                <form>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setfirstName(e.target.value)}
                            placeholder="Enter fname" autoComplete="off"
                        />

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setlastName(e.target.value)}
                            placeholder="Enter lname" autoComplete="off"
                        />

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="Enter email" autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control col-4"
                            id="password"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="Enter password" autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="number"
                            className="form-control col-4"
                            id="phone"
                            value={phone}
                            onChange={(e) => setphone(e.target.value)}
                            placeholder="Enter phone" autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control col-4"
                            id="role"
                            value={role}
                            onChange={(e) => setrole(e.target.value)}
                            placeholder="Enter role" autoComplete="off"
                        />
                    </div>
                    <div >
                        <button onClick={(e) => saveUser(e)} className="btn btn-primary">Save</button>
                    </div>
                </form>
                <hr />
                <Link to={`/sales/profile/${userId}`}>Back to user Profile</Link>
            </div>
        </div>
    )
}

export default UpdateUser;