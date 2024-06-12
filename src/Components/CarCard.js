// src/components/CarCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair, faSuitcase, faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import '../styles/CarCard.css'; // Import the custom CSS file

const CarCard = ({ car }) => {
    return (
        <Card className="car-card ">
            <div className="car-content">
                <div className="car-image">
                    <Card.Img src={car.image_url} />
                </div>
                <Card.Body>
                    <Card.Title className="card-title">{car.make} {car.model}</Card.Title>
                    <div className="car-details">
                        <p style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}><strong>Year:</strong> {car.year}</p>
                        <p style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}><strong>Location:</strong> {car.location}</p>
                        <p style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}><strong>Description:</strong> {car.description}</p>
                    </div>
                    <div className="car-features">

                        <p style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}><FontAwesomeIcon icon={faChair} /> {car.type === 'muv' ? '7 Seaters' : '5 seater'}</p>
                        <p style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}><FontAwesomeIcon /> </p>
                        <p style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}><FontAwesomeIcon icon={faSuitcase} /> {car.bags} Lugguages</p>
                    </div>
                    <div className="car-inclusions-exclusions">
                        <p style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}><strong>Inclusion:</strong>  driver allowance, {car.inclusions}</p>
                        <p style={{ color: "black", fontSize: "15px", fontFamily: "Arial" }}><strong>Exclusion:</strong> Car Parking, {car.exclusions}</p>
                    </div>
                </Card.Body>
            </div>
            <div className="car-price-section">
                <div className="car-price">
                    <FontAwesomeIcon icon={faRupeeSign} /> <strong>{car.rate}</strong> /per Km
                </div>
                <a href="tel:+919511733122">
                    <Button variant="warning" className="book-btn">Book Car on Call</Button>
                </a>
            </div>
        </Card>
    );
}

export default CarCard;
