import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Findpage1 from './Component/Findpage1';
import Findpage2 from './Component/Findpage2';
import StoreInfo from './Component/StoreInfo';
import Umbenroll2 from './Component/Umbenroll2';
import Login from './Component/Login';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findpage1" element={<Findpage1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/storeinfo" element={<StoreInfo />} />
          <Route path="/umbenroll2" element={<Umbenroll2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
