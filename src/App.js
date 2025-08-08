// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MyPage from './pages/MyPage';
import Item1 from './pages/Item1';
import Item2 from './pages/Item2';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/item1" element={<Item1 />} />
          <Route path="/item2" element={<Item2 />} />
          <Route path="*" element={<Login />} /> {/* 기본 화면 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
