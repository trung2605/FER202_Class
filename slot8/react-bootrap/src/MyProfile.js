import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap'; // Import các component từ react-bootstrap

function MyProfile() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-1/498944710_1213934736845274_1909719279597755611_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=4LbNsKE56OQQ7kNvwEPAi2h&_nc_oc=AdmfOJ2h5h2Z0b3uhEuY14jqw_SGAOO5dtNOVD0FjmscZ4bay2eNb8-YE_VffaREMSw&_nc_zt=24&_nc_ht=scontent.fdad3-4.fna&_nc_gid=d7l7MaMKIraNMAmvvMvLVA&oh=00_AfPkQq1vGGIZGb3wwjlY5eWq5Z8y-GyXsOuE-00ch7wB4w&oe=6846AE4F" />
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>My Profile</Card.Title>
              <Card.Text>
                Name: Lê Trí Trung
              </Card.Text>      
            </Card.Body>
            <Button variant="primary">Edit Profile</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;