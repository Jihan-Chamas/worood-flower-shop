import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import HomePage from "./components/HomePage";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import AboutUs from './components/AboutUs';
import { Routes, Route } from 'react-router-dom';
import AllFlowers from './components/AllFlowers';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeletProduct';


function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]); 
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/allFlowers" element={<AllFlowers />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/addProduct" element={<AddProduct ProductAdded={addProduct}/>} />
        <Route path="/updateProduct" element={<UpdateProduct/>} />
        <Route path="/deleteproduct" element={<DeleteProduct/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
