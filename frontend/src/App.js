import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import Findpage1 from './Component/Findpage1';
import Home from './Component/Home';
=======
<<<<<<< HEAD
import Findpage1 from './Component/Findpage1';
import Home from './Component/Home';
=======
import FindPage1 from './Component/FindPage1';
// import Home from './Component/Home';
// import Home from './Component/Home.jsx';
>>>>>>> 532cf01fd17ea112d5040a0e76924ee896ba0aea
// import Login from './Component/Login.jsx'
>>>>>>> bdf4332ff510ac8d8e6794dc7e4dcd1e955b2050

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findpage1" element={<Findpage1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
