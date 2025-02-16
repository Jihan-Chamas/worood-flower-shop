import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import HomePage from "./components/HomePage";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import AboutUs from './components/AboutUs';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Navbar/>
 
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element= {<AboutUs />} />
     
      
    </Routes>
    <Footer/>
     
    </>
  )
}

export default App
