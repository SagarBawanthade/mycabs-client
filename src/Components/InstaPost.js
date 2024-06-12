import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/InstaPost.css'; // Import custom CSS for additional styling
import post1 from '../images/post1.png';
import post2 from '../images/post2.png';
import post3 from '../images/post3.png';
import post4 from '../images/post4.png';

const InstaPost = () => {
    const posts = [
        {
            id: '1',
            image: post1,
            caption: 'Your Reliable ride Anytime, Anywhere.'
        },
        {
            id: '2',
            image: post2,
            caption: 'Exploring the city.'
        },
        {
            id: '3',
            image: post3,
            caption: 'Your Comfort Our Priority.'
        },
        {
            id: '4',
            image: post4,
            caption: 'Fueling the journey, YOUR PLACE OUR SERVICE'
        }

    ];


    return (
        <Container id="feed" className="my-5">
            <h2 style={{ fontFamily: "Amaranth", fontSize: "40px", marginBottom: "5rem" }} className="text-center">Our Feed</h2>
            <Row className='m-3 my-4'>
                {posts.map(post => (
                    <Col md={3} sm={6} xs={12} key={post.id} className="mb-5">
                        <div className="instagram-post">
                            <img src={post.image} alt={post.caption} className="img-fluid" />
                            <div className="caption">
                                <p style={{ fontSize: "30px", fontFamily: "play" }}>{post.caption}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default InstaPost;
