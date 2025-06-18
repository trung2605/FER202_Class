import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ValidatedInput from "./ValidatedInput";
import ValidatedEmail from "./ValidatedEmail";
import RegistrationForm from "./RegistrationForm";
import AdvancedFormValidation from "./AdvancedFormValidation";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container className="mt-5">
        <ValidatedInput />
        <RegistrationForm />
        <AdvancedFormValidation />
      </Container>
    </div>
  );
}

export default App;
