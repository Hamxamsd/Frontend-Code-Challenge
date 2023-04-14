import Carousel from 'react-bootstrap/Carousel';
// carousel Images
import carouselImage_1 from '../assests/carouselImages/1.jpg'
import carouselImage_2 from '../assests/carouselImages/2.jpg'
import carouselImage_3 from '../assests/carouselImages/3.jpg'

function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={carouselImage_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Shop Smart, Seamlessly</h3>
          <p>Experience effortless shopping with our intuitive Store</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={carouselImage_2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Find Your Style</h3>
          <p>Style is a reflection of your attitude</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={carouselImage_3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Discover New Deals</h3>
          <p>
          Unveil Exciting Offers, Scroll Through Now
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;