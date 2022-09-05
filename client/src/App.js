import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Header />
        <div className="home">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
