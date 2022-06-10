/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-empty-pattern */
import { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Footer from "./Footer.js";
import ThanksR from "./ThanksR.js";
import ThanksD from "./ThanksD.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login";
import Request from "./Request";
import Donate from "./Donate"

function App() {

  useEffect(() => {

  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/checkout" element={<Checkout />} exact />
        <Route path="/request" element={<Request />} exact />
        <Route path="/donate" element={<Donate />} exact />
        <Route path="/ThanksR" element={<ThanksR />} exact />
        <Route path="/ThanksD" element={<ThanksD />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
