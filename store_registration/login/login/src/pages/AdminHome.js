import React from 'react';
import Adminflow from './Adminflow';

function AdminHome() {
    let text = sessionStorage.getItem("validated_date");
    let obj = JSON.parse(text);
    let name=obj.firstName;

    return (
        <div>
            <Adminflow />
            <div className="container">
                <br />
                {/* <h1>Welcome  {name}</h1>  <br /><br /><br /> */}
                <div className='jumbotron img-jumbo'>

                    <h1>Welcome  {name}</h1>  <br /><br /><br />
                    <br /><br /><br />
                    <br /><br /><br /><br /><br /><br />

                </div>
            </div>
        </div>
    );
}

export default AdminHome;
