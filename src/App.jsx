import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './components/context/CartContext';
import NavbarComponent from './components/NavbarComponent';
import WhatsAppComponent from './components/WhatsAppComponent';
import AnimatedRoutes from './components/AnimatedRoutes'; 
import Galeria from './components/Galeria';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <CartProvider>
        <NavbarComponent />
        <WhatsAppComponent />
        <AnimatedRoutes /> 
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
