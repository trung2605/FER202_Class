import React from "react";
import { Card, Row, Col } from "react-bootstrap"; // Import Card, Row, Col
import Title from "./Title";
import Description from "./Description";
import Image from "./ImageFpt";

function SimpleCard({ item, className }) {
  const { title, description, imageUrl } = item;

  return (
    <Card className={`my-3 p-3 border-primary`}>
      <Card.Body>
        <Row className="align-items-center">
          <Col
            xs={4}
            className="d-flex justify-content-center align-items-center"
          >
            <div
              className="img-placeholder bg-warning-subtle d-flex justify-content-center align-items-center"
              style={{
                border: "1px solid #ccc",
              }}
            >
              <Image
                url={imageUrl}
                alt={title}
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </Col>

          <Col xs={8}>
            <Title text={title} as="h4" className="mb-1" />
            <Description text={description} className="mb-0" />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default SimpleCard;
