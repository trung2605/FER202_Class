import React from "react";
import { Card, Button } from "react-bootstrap";

const StudentCard = ({ student }) => {
  return (
    <Card  className="">
      <Card.Img
        variant="top"
        src={student.avatar}
        alt={`${student.name}'s avatar`}
      />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Text>Age: {student.age}</Card.Text>
        <Button variant="primary">Edit</Button>

        <Button style={{"margin": "10px"}} variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
};

export default StudentCard;