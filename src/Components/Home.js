import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Home.css'; // Import the CSS file for additional styling
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';
import '../styles/Home.css';


const Home = () => {
    return (
        <Carousel id="home" className="custom-carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-carousel-image"
                    src={slider3}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Happiness is Travelling</h3>
                    <p style={{ color: "yellow", fontFamily: "Poiret One", fontSize: "25px" }}>Life is about the adventures you take and the memories you make. ...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 custom-carousel-image"
                    src={slider2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Love Travelling</h3>
                    <p style={{ color: "yellow", fontFamily: "Poiret One", fontSize: "25px" }}>May your journey be free from stress and bring you home safely.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 custom-carousel-image"
                    src={slider1}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Live with no Excuse</h3>
                    <p style={{ color: "yellow", fontFamily: "Poiret One", fontSize: "25px" }}>Travel Not to find yourself, but to remember who you have been all along.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;
