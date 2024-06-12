import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "../styles/SearchCars.css";
import { useNavigate } from 'react-router-dom';

const SearchCars = () => {
  const navigate = useNavigate();
  const [searchType, setSearchType] = useState('Regular'); // Default to 'regular'

  const handleSubmit = (e) => {
    e.preventDefault();

    const fromLocation = document.getElementById("formFromLocation").value;
    const toLocation = document.getElementById("formToLocation")?.value;

    if (fromLocation === "" || (searchType === 'Regular' && toLocation === "")) {
      alert("Please fill all the fields");
    } else {
      if (searchType === 'regular') {
        navigate(`/search?from=${fromLocation}&to=${toLocation}&type=${searchType}`);
      } else {
        navigate(`/search?from=${fromLocation}&to=${toLocation}&type=${searchType}`);
      }
    }
  };

  return (
    <Container id="searchcars" className="my-5">
      <h1 style={{ fontFamily: "Amaranth", marginBottom: "38px" }} className="text-center">
        Search here..
      </h1>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form className="search-form" onSubmit={handleSubmit}>
           

            <Form.Group className="mx-3" controlId="formFromLocation">
              <Form.Label>From</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
               
              />
            </Form.Group>

           
              <Form.Group className="mx-3" controlId="formToLocation">
                <Form.Label>To</Form.Label>
                <Form.Control type="text" placeholder="Enter destination" />
              </Form.Group>
          

<Form.Group className="mx-3 w-25" controlId="formSearchType">
              <Form.Label>Search Type</Form.Label>
              <Form.Control
                as="select"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option value="Regular">Regular Cab</option>
                <option value="Rent">Rent a Cab</option>
              </Form.Control>
            </Form.Group>

            <Button id="btn" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchCars;
