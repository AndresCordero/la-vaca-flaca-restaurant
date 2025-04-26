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
        <title>Vaca Flaca - Restaurante y Zona Biker</title>
        <meta name="description" content="Disfruta de la mejor comida en Restaurante Vaca Flaca. Ambiente acogedor y platos deliciosos." />
        <meta property="og:title" content="Vaca Flaca - Restaurante y Zona Biker" />
        <meta property="og:description" content="Disfruta de la mejor comida en La Vaca Flaca. Ambiente acogedor y platos deliciosos." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vacaflaca.com/" />
        <meta property="og:image" content="https://vacaflaca.com/LogoNav4.png" />
        <meta name="twitter:card" content="summary_large_image" />
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
