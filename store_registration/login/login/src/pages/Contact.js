import React from 'react';
import Navigation from '../component/Navigation';
import '../styles/Contact.css';

function Contact() {
    return (
        <div >
            <Navigation />

            <br /><br />
            <div>
                <div className="main btn4" style={{ backgroundImage: 'url("https://media.istockphoto.com/photos/contact-us-symbols-on-toy-blocks-contact-us-and-crm-concept-picture-id1053986724?k=20&m=1053986724&s=612x612&w=0&h=fmgaNcQnUS1ltgTAG-nUjVLXYVTHKT86Bvn0KZCSft4=")', backgroundRepeat: "no-repeat", color: "black" }}>
                    <h3><b>Contact Us : </b></h3>
                    <h5>Email:storemanagement@gmail.com</h5>
                    <h5>Contact No : +91 9477562108</h5>
                </div>
            </div>

        </div>
    );
}

export default Contact;
