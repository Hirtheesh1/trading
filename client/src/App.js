
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Login from './pages/login_register/Login';
import Register from './pages/login_register/Register';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <Sidebar/>
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/" element={<Register />} /> {}
        
    //   </Routes>
    // </Router>
  );
}

export default App;