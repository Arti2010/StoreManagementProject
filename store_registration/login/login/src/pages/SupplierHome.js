import React from 'react';
import Supplierflow from './Supplierflow';
import '../styles/SupplierHome.css';

function SupplierHome() {
    return (
        <div>
            <Supplierflow />
            <div class="container">
                <div class="slider">
                    <img className='supply' src="https://pngset.com/images/vegetable-delivery-boy-person-plant-produce-food-transparent-png-720661.png" alt="image not available" />
                </div>
            </div>
        </div>
    );
}

export default SupplierHome;
