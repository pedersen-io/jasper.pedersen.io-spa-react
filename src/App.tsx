import React from 'react';
import logo from './logo.svg';
import { AboutComponent } from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <AboutComponent name="Jasper Charles Pedersen" occupation="Princeling" />
    </div>
  );
}

export default App;
