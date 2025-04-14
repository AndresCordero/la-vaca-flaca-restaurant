import './App.css'
import WhatsAppComponent from './components/WhatsAppComponent'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos
import FetchApi from './mock/FetchApi'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Galeria from './components/Galeria'
import ZonaBiker from './components/ZonaBiker'
import { CartProvider } from './components/context/CartContext'
import CartContainer from './components/CartContainer.'
import Checkout from './components/Checkout'
import Contacto from './components/Contacto'




/*  Router */

function App() {
  return (
    <BrowserRouter> {/*Componente del Router instalado*/}
    <ToastContainer />
      <CartProvider>
        <NavbarComponent /> {/*Va fuera de Routes para que se muestre en todos lados*/}
        <WhatsAppComponent/>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/productos' element={<ItemListContainer greeting="Todos los productos" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Estas viendo la categoria: " />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/zonabiker' element={<ZonaBiker />} />
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </CartProvider>

      {/* <FetchApi /> */}
    </BrowserRouter>
  )
}

export default App



