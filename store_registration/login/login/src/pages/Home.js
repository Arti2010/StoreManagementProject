import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import Navigation from '../component/Navigation';

function Home() {
  return (

    <div>
      <Navigation />
      <br /><br />

      <div>
        <Carousel interval={2000}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/free-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg?size=626&ext=jpg"
              alt="First slide" width="50%" height="450px"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://static3.depositphotos.com/1006434/216/i/600/depositphotos_2169440-stock-photo-modern-supermarket-view.jpg"
              alt="Second slide" height="450px" width="200px"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://thumbs.dreamstime.com/z/laayoune-morocco-february-skin-care-beauty-products-display-supermarket-wany-laayoune-morocco-laayoune-morocco-190123521.jpg"
              alt="Third slide" height="450px" width="200px"
            />

          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
