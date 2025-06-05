// src/components/Description.js
import React from 'react';
import { Card } from 'react-bootstrap'; 
function Description({ text, as = 'p', className }) {
  return (
    <Card.Text as={as}>
      {text}
    </Card.Text>
  );
}

export default Description;