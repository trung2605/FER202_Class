import logo from "./logo.svg";
import "./App.css";
import NameList from "./NameList";
import UserProfile from "./UserProfile";
import Welcome from "./Welcome";
import StudentCard from "./StudentCard";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import menu1 from "./assets/menu1.jpg";

function App() {
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
  const userData = { name: "traltb@fe.edu.vn", age: 39 };

  //Danh sach students
  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: menu1 },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: menu1 },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: menu1 },
  ];
  return (
    <div className="App">
      <Welcome name="traltb@fe.edu.vn" />
            <UserProfile user={userData} />
            <NameList names={namesList} />
      <Container>
                <h1 className="my-4 text-center">Student information</h1>     
        <Row style={{}}>
          {students.map((student, index) => ( 
            <Col key={index} lg={4} md={6} xs={12} className="mb-4">
              <StudentCard student={student} />
            </Col>
          ))}       
        </Row>
      </Container>
    </div>
  );
}

export default App;
