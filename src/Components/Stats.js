import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faMapMarkedAlt, faSuitcase, faClock } from '@fortawesome/free-solid-svg-icons';
import '../styles/Stat.css'; // Import custom CSS for additional styling

const Stats = () => {
    return (
        <div className="stats-section">
            <Container>
                <Row className="text-center">
                    <Col md={3}>
                        <div className="stat-item">
                            <FontAwesomeIcon icon={faUsers} size="3x" className="stat-icon" />
                        </div>
                        <div>
                            <h3 className='h3'>Total Customers</h3>
                            <p className='p'>5,000+</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="stat-item">
                            <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" className="stat-icon" />
                        </div>
                        <div>

                            <h3 className='h3'>Total Destinations</h3>
                            <p className='p'>100+</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="stat-item">
                            <FontAwesomeIcon icon={faSuitcase} size="3x" className="stat-icon" />
                        </div>
                        <div>
                            <h3 className='h3'>Experience</h3>
                            <p className='p'>7 Years+</p>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="stat-item">
                            <FontAwesomeIcon icon={faClock} size="3x" className="stat-icon" />
                        </div>
                        <div>
                            <h3 className='h3'>Packages</h3>
                            <p className='p'>50+</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Stats;
