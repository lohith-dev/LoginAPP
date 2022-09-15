import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import './App.css';
import Welcome from './Components/Welcome';
import Home from './Components/Home';

function App() {
  return (
    
    <Router>
      <div>
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/welcome" element={<Welcome/>} />
        </Routes>
       </div>
    </Router>
   
    
  );
}

export default App;
