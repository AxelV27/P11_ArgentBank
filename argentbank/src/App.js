import React from "react";
import { Route, Routes,} from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Footer from "./components/footer";
import '../src/css/main.css';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;