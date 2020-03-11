import React from 'react';
import Button from 'react-bootstrap/Button';
import './App.css';
import { AboutComponent } from './components/About';

function App() {
  return (
    <div className="App">
      <Button variant="primary"></Button>
      <AboutComponent name="Jasper Charles Pedersen" occupation="Princeling" />
    </div>
  );
}

export default App;
