import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CarCard from './CarCard'; 
import carImage from './car.png'; 

function App() {
  return (
    <Container className="my-5"> 
      <h1 className="mb-4">Cards Columns</h1> 
      <Row className="justify-content-center">   
        <Col lg={4} md={6} xs={12} className="mb-4">
          <CarCard
            imageSrc={carImage} 
            text="Some text inside the first card"
            borderColor="blue"
          />
        </Col>

        <Col lg={4} md={6} xs={12} className="mb-4">
          <CarCard
            imageSrc={carImage}
            text="Some text inside the first card"
            borderColor="gold"
          />
        </Col>

        <Col lg={4} md={6} xs={12} className="mb-4">
          <CarCard
            imageSrc={carImage}
            text="Some text inside the first card"
            borderColor="red"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;