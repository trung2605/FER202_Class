// src/pages/About.js
import React from 'react';
import { Container } from 'react-bootstrap';

function About() {
  return (
    <Container className="my-4">
      <h1>About Us</h1>
      <p>
        Welcome to our React application! This project demonstrates the use of React Router for navigation,
        displaying dynamic content from an array, building a quiz, and creating a contact form with React-Bootstrap.
      </p>
      <p>
        Our goal is to provide a comprehensive example of building a multi-page application using modern React practices.
      </p>
    </Container>
  );
}

export default About;