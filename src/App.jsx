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
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <BrowserRouter>
    <Helmet>
        <title>La Vaca Flaca Restaurante</title>
        <meta name="description" content="Disfruta de la mejor comida en La Vaca Flaca. Ambiente acogedor y platos deliciosos." />
        <meta property="og:title" content="La Vaca Flaca Restaurante" />
        <meta property="og:description" content="Disfruta de la mejor comida en La Vaca Flaca. Ambiente acogedor y platos deliciosos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://la-vaca-flaca-restaurant.vercel.app/" />
        <meta property="og:image" content="https://la-vaca-flaca-restaurant.vercel.app/LogoNav4.png" />
      </Helmet>


      <ToastContainer />
      <CartProvider>
        <NavbarComponent />
        <WhatsAppComponent />
        <AnimatedRoutes /> 
        <Footer/>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
