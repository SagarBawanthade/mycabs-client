// src/components/SearchPage.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarCard from '../Components/CarCard.js';
import '../styles/Search.css';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Footer from '../Components/Footer.js';



const SearchPage = () => {
    const location = useLocation();
    const { from = 'Pune', to = 'Mumbai', type='regular' } = queryString.parse(location.search);


    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        fetch('https://mycab-api.onrender.com/api/cars')
            .then(response => response.json())
            .then(data => {
                setCars(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, [from, to,type]);




    return (
        <div>
            <nav className=" custom-breadcrumb bg-dark " aria-label="breadcrumb">
                <ol className="container breadcrumb ol">
                    <li className=" text-light breadcrumb-item">Home</li>
                    <li className="text-light breadcrumb-item active" aria-current="page">{`${from} To ${to}`}</li>
                </ol>
            </nav>
            <br />
            <h3 style={{ color: "black" }} >{`${from} To ${to}`} --{`${type}`} Cabs</h3>
            <br />



            {
                loading ? (
                    <div className="d-flex justify-content-center align-items-center vh-100">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <Container>


                        <Row>
                            {cars.map((car, index) => (
                                <Col key={index} xs={12} >
                                    <CarCard car={car} />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                )
            }
            <Footer />
        </div >
    );
}

export default SearchPage;
