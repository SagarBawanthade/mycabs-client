import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import locationData from '../data/location.json';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

const PopularLocations = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Set locations data from imported JSON to state
        setLocations(locationData.locations);
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <Container id="popularlocations" className="my-5">
            <h2 className='text-center' style={{ fontFamily: "Amaranth", fontSize: "40px", marginBottom: "5rem" }}>Popular Destinations</h2>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {locations.map(location => (
                    <MDBCol key={location.id}>
                        <MDBCard className='h-100 custom-card'>
                            <MDBCardImage
                                src={location.image}
                                alt={location.name}
                                position='top'
                                className='custom-card-image'
                            />
                            <MDBCardBody>
                                <MDBCardTitle style={{ color: "black", fontSize: "25px", fontFamily: "sans-serif" }}>{location.name}</MDBCardTitle>
                                <MDBCardText style={{ color: "black", fontSize: "15px", fontFamily: "sans-serif" }}>{location.description}</MDBCardText>
                            </MDBCardBody>

                        </MDBCard>
                    </MDBCol>
                ))}
            </MDBRow>
        </Container>
    );
}

export default PopularLocations;
