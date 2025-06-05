import React from 'react';
import { Card } from 'react-bootstrap'; 
function Title({ text, as = 'h5', className }) {
  return (
    <Card.Title as={as} className={`text-dark ${className || ''}`}>
      {text}
    </Card.Title>
  );
}

export default Title;