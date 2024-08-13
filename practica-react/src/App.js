import logo from './logo.svg';
import './App.css';
import {SegundoComponente} from "./components/SegundoComponente.jsx";
import { PrimerComponente } from './components/PrimerComponente.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Aprendiendo React</h1>
        <PrimerComponente/>
        <SegundoComponente/>
      </header>
    </div>
  );
}

export default App;
