import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Components/AuthContext';
import Navigator from './Components/Navigator';
import Home from './Pages/Home';
import Findpage1 from './Pages/Findpage1';
import Findpage2 from './Pages/Findpage2';
import StoreInfo from './Pages/StoreInfo';
import Umbenroll1 from './Pages/Umbenroll1';
import Umbenroll2 from './Pages/Umbenroll2';
import BorrowReturn from './Pages/BorrowReturn';
import Loginform from './Pages/Loginform';
import SignUp from './Pages/SignUp';
import Mypage from './Pages/Mypage';

import './App.css';

function App() {  
  return (
    <Router>
      <AuthProvider>
        <Navigator />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/findpage1" element={<Findpage1 />} />
            <Route path="/findpage2" element={<Findpage2 />} />
            <Route path="/login" element={<Loginform />} />
            <Route path="/signup" element={<SignUp />} /> 
            <Route path="/storeinfo" element={<StoreInfo />} />
            <Route path="/umbenroll1" element={<Umbenroll1 />} />
            <Route path="/umbenroll2" element={<Umbenroll2 />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/borrowreturn/:postId" element={<BorrowReturn />}/>
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
