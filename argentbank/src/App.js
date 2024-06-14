import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Profile from "./pages/Profile/profile";
import Footer from "./components/footer";
import '../src/css/main.css';
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector(state => state.authen.isAuthenticated);
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" />:<Login />} />
      <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login"/>}  />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
