import React from 'react';
import { useState } from 'react';
import { useEffect } from "react/cjs/react.development";
import { Link, useHistory, useParams } from 'react-router-dom';
import SalesmanService from '../service/SalesmanService';
import PersonIcon from '@material-ui/icons/Person';
import Salesflow from './Salesflow';
import UserService from '../service/UserService';

const CompleteProfile = () => {

    const [userId, setUserId] = useState('');
    const [shopName, setshopName] = useState('');
    const [city, setcity] = useState('');
    const [zipCode, setzipCode] = useState('');
    const [state, setstate] = useState('');
    const [country, setcountry] = useState('');
    


    const history = useHistory();
    const { Id } = useParams();
    const init = () => {
  UserService.getAddress(Id)
  .then(response => {
    console.log("Address details are", response.data);

    if(response.data !=null){
        setUserId(response.data.userId);
        setshopName(response.data.shopName);
        setcity(response.data.city);
        setzipCode(response.data.zipCode);
        setstate(response.data.state);
        setcountry(response.data.country);
    }
    setUserId(Id);
    console.log(response.data.city);
    history.push('/sales/Complete/profile/'+Id);
})
.catch(error => {
    console.log('something went wroing', error);
    // console.log(product);
})
        // let data={
        //     userId 
        // }
     
    }
  
  
  
    useEffect(() => {
      init();
    }, []);
    const saveAddress = (e) => {
        e.preventDefault();
       
        const address={shopName,city,zipCode,state,country,userId};
       
        UserService.saveAddress(address)
        .then(response => {
            console.log('address added successfully', response.data);
            alert("data added succussfully");
            history.push('/sales/Complete/profile/'+Id);
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })


    }
  
  
    return (
      <div>
        <Salesflow />
        <div className="container">
                <h3>Your Address</h3>
                <hr />
                <form>
                    <div className="form-group">
                        <label>Shop Name</label>
                        <input
                            type="text"
                            className="form-control col-4"
                            id="shopName"
                            value={shopName}
                            onChange={(e) => setshopName(e.target.value)}
                            placeholder="Enter shopname" autoComplete="off"
                        />

                    </div>
                    <div className="form-group">
                     <label>city</label>
                        <input
                            type="text"
                            className="form-control col-4"
                            id="city"
                            value={city}
                            onChange={(e) => setcity(e.target.value)}
                            placeholder="Enter city" autoComplete="off"
                        />

                    </div>
                    <div className="form-group">
                  
                    <label>ZipCode</label>
                        <input
                            type="number"
                            className="form-control col-4"
                            id="zipCode"
                            value={zipCode}
                            onChange={(e) => setzipCode(e.target.value)}
                            placeholder="Enter zipcode" autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                    <label>State:</label>
                        <input
                            type="text"
                            className="form-control col-4"
                            id="state"
                            value={state}
                            onChange={(e) => setstate(e.target.value)}
                            placeholder="Enter state" autoComplete="off"
                        />
                    </div>
                    <div className="form-group">
                    <label>Country:</label>
                        <input
                            type="text"
                            className="form-control col-4"
                            id="country"
                            value={country}
                            onChange={(e) => setcountry(e.target.value)}
                            placeholder="Enter country name" autoComplete="off"
                        />
                    </div>
                    
                 
                    <div >
                        <button onClick={(e) => saveAddress(e)} className="btn btn-primary">Save</button>
                    </div>
                </form>
                <hr />
                <Link to={`/sales/complete/details/${Id}`}>Show complete Details</Link>
                {/* <button onClick={history.push('/sales/cat-prod/'+x)} className="btn btn-primary">Back to List</button> */}
            </div>
  
       
      </div>
    );
  
  
  
  
  
  }
  
  
  export default CompleteProfile;