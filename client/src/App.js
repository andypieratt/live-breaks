import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Header />
        <div className="home">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Singup />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
