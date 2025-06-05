import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SimpleCard from "./Cart_Simple";
import { Container } from "react-bootstrap"; // Import Container từ react-bootstrap
import Exercise5 from "./Exercise5"; // Import Exercise5 component

function App() {
  const cardData = [
    {
      title: "Hoai Nguyen FPT Da Nang",
      description: "0912158715",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9Qh2rJaKcHthgCzbqkeZ2GWJJmcT2M4oXA&s",
    },
    {
      title: "Hoai Nguyen FPT Da Nang",
      description: "0912158715",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9Qh2rJaKcHthgCzbqkeZ2GWJJmcT2M4oXA&s",
    },
    {
      title: "Hoai Nguyen FPT Da Nang",
      description: "0912158715",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9Qh2rJaKcHthgCzbqkeZ2GWJJmcT2M4oXA&s",
    },
  ];

  return (
    <Container fluid className="App">
      
      <Exercise5 />

      <Container>
        {cardData.map((item, index) => (
          <div key={index} className="d-flex justify-content-center mb-3">
            <SimpleCard item={item} className="w-75 w-md-50" />
          </div>
        ))}
      </Container>

    </Container>
  );
}

// {/* Alternatively, if you want to display a single card: */}
//      { <div className="d-flex justify-content-center">
//         <SimpleCard item={cardData} className="w-75 w-md-50" />
//       </div>}

export default App;
