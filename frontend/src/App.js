import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Findpage1 from './Component/Findpage1';
import Findpage2 from './Component/Findpage2';
import StoreInfo from './Component/StoreInfo';
import Umbenroll2 from './Component/Umbenroll2';
import Login from './Component/Login';
=======

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Findpage1 from './Component/Findpage1';
import Findpage2 from './Component/Findpage2';
import Umbenroll2 from './Component/Umbenroll2';
import StoreInfo from './Component/StoreInfo';
// import Home from './Component/Home';
// import Login from './Component/Login.jsx'

>>>>>>> bde29cc32213baa03e0ab9ddf7bcc44ba16b7bbb

import './App.css';

function App() {
  return (
<<<<<<< HEAD
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
=======
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/findpage1" element={<Findpage1 />} />
    //     </Routes>
    //   </div>
    // </Router>
    <StoreInfo />
>>>>>>> bde29cc32213baa03e0ab9ddf7bcc44ba16b7bbb
  );
}

export default App;
