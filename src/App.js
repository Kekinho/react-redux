import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StaticSketch from './home/StaticSketch';
import DynamicSketch from './home/DynamicSketch';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/staticsketch">StaticSketch</Link>
            </li>
            <li>
              <Link to="/dynamicsketch">DynamicSketch</Link>
            </li>            
          </ul>
        </nav>

        <Routes>
          <Route path="/staticsketch" element={<StaticSketch />} />
          <Route path="/dynamicsketch" element={<DynamicSketch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;