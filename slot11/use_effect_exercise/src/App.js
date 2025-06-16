import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ValidatedInput from './ValidatedInput';
import ValidatedEmail from './ValidatedEmail';

function App() {
  return (
    <div className="App">
      <ValidatedInput />
      <ValidatedEmail />
    </div>
  );
}

export default App;
