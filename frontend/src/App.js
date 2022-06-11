import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home.js";
import Footer from "./components/Footer.js";
import ThanksR from "./components/ThanksR.js";
import ThanksD from "./components/ThanksD.js";
import ThanksO from "./components/ThanksO";
import Checkout from "./components/Checkout.js";
import Login from "./components/Login";
import Request from "./components/Request";
import Donate from "./components/Donate"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path="/ThanksO" element={<ThanksO />} exact />
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  );
}

export default App;
