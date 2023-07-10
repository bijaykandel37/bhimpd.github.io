import Carousel from 'react-bootstrap/Carousel';
import img1 from "../images/1.png";

import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";

const Carouselitem =()=> {
    
const myimg = {
    height : "80vh"
  }
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          style = {myimg}
                    alt="First slide"
        />
        <Carousel.Caption>
          <h3>OUR PRODUCTS</h3>
          <p>Best Quality.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
          style = {myimg}
        />

        <Carousel.Caption>
          <h3>QUALITY PRODUCTS</h3>
          <p>Our Success</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         src={img3}
          alt="Third slide"
          style = {myimg}
        />

        <Carousel.Caption>
          <h3>CUSTOMER SATISFACTION</h3>
          <p>
            Our Achievement
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouselitem;