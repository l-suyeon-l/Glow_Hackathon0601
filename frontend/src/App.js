import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigator from './Component/Navigator';
import Home from './Component/Home';
import Findpage1 from './Component/Findpage1';
import Findpage2 from './Component/Findpage2';
import StoreInfo from './Component/StoreInfo';
import Umbenroll1 from './Component/Umbenroll1';
import Umbenroll2 from './Component/Umbenroll2';
import Login from './Component/Login';
import Loginform from './Component/Loginform';

import './App.css';

function App() {
  return (
    <Router>
      <Navigator />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/findpage1" element={<Findpage1 />} />
          <Route path="/findpage2" element={<Findpage2 />} />
          <Route path="/login" element={<Loginform />} />
          <Route path="/storeinfo" element={<StoreInfo />} />
          <Route path="/umbenroll1" element={<Umbenroll1 />} />
          <Route path="/umbenroll2" element={<Umbenroll2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
