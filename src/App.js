import React from 'react';
import './Components/Navbar.css';
import Navbar from "./Components/Navbar";
import './Components/Footer.css';
import Footer from "./Components/Footer";

 export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Footer/>
    </div>
  );
 }