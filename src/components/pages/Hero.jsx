import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// Carousel Images from local PC 
import carouselImage1 from '../assests/carouselImages/1.jpg';
import carouselImage2 from '../assests/carouselImages/2.jpg';
import carouselImage3 from '../assests/carouselImages/3.jpg';

// Renders a carousel with three items and captions
function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={carouselImage1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Shop Smart, Seamlessly</h3>
          <p>Experience effortless shopping with our intuitive store.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={carouselImage2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Find Your Style</h3>
          <p>Style is a reflection of your attitude.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={carouselImage3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Discover New Deals</h3>
          <p>Unveil exciting offers. Scroll through now.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;