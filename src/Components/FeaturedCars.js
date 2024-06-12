import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col , Button} from "react-bootstrap";
import "../styles/FeaturedCars.css"; // Import custom CSS for additional styling

function FeaturedCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch cars data from backend API
    const fetchData = async () => {
      try {
        const response = await fetch("https://mycab-api.onrender.com/api/cars");
        if (!response.ok) {
          throw new Error("Failed to fetch cars");
        }
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container id="featuredcars" className="my-5">
      <h2
        style={{
          marginTop: "5rem",
          fontFamily: "Amaranth",
          fontSize: "40px",
          marginBottom: "4rem",
        }}
        className="text-center"
      >
        Our Services
      </h2>
      <Row>
        {cars.slice(0, 4).map((car, index) => (
          <Col lg={3} md={6} sm={12} key={index}>
            <Card className="mb-4 custom-card">
              <div
                className="custom-card-image"
                style={{ backgroundImage: `url(${car.image_url})` }}
              ></div>
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title
                  style={{
                    fontFamily: "Play",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  {car.make} {car.model}
                </Card.Title>
                <Card.Text
                  style={{
                    fontFamily: "Arial",
                    fontSize: "16px",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  {car.description}
                </Card.Text>
                <a href="tel:+919511733122">
                    <Button  className="btns mt-auto">Book Car on Call</Button>
                </a>
                
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default FeaturedCars;
