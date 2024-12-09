import Carousel from 'react-bootstrap/Carousel';
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
function Corousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-full h-[600px]"
          srcSet={c1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Brave firefighters extinguishing blazing fires</h3>
          <p>Delhi Firefighters combating a massive blaze</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-[600px]"
          srcSet={c2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Advanced fire safety tools and vehicles</h3>
          <p>Modern equipment ensuring rapid fire response</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-full h-[600px]"
          srcSet={c3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Fire safety education for public awareness</h3>
          <p>
            Training citizens in fire prevention measures
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousel;