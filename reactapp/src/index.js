import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./home.js"
import Store from "./Store.js"
import Navbarstore from "./Navbar.js"
import About from "./About.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./Contact.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbarstore />
    <BrowserRouter>
    <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/Store" element={<Store />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
