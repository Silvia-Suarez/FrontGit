/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React from "react";
import Navegador from "./pages/Navegador";
import Fibonacci from "./pages/Fibonacci";
import Triangulo from "./pages/Triangulo";
import Circulo from "./pages/Circulo";
import Rectangulo from "./pages/Rectangulo";
import Factorial from "./pages/Factorial";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Navegador/>}/>
            <Route exact path="/fibonacci" element={<Fibonacci/>}/>
            <Route exact path="/factorial" element={<Factorial/>}/>
            <Route exact path="/triangulo" element={<Triangulo/>}/>
            <Route exact path="/circulo" element={<Circulo/>}/>
            <Route exact path="/rectangulo" element={<Rectangulo/>}/>
          </Routes>
        </Router>
    );
  }
}

export default App;