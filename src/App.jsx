import './App.css'
import WhatsAppComponent from './components/WhatsAppComponent'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import FetchApi from './mock/FetchApi'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ErrorPage from './components/ErrorPage'
import News from './components/News'
import Galeria from './components/Galeria'
import ZonaBiker from './components/ZonaBiker'
import { CartProvider } from './components/context/CartContext'
import CartContainer from './components/CartContainer.'




/*  Router */

function App() {
  return (
    <BrowserRouter> {/*Componente del Router instalado*/}
      <CartProvider>
        <NavbarComponent /> {/*Va fuera de Routes para que se muestre en todos lados*/}
        <WhatsAppComponent/>
        <Routes>
          <Route path='/' element={< News />} />
          <Route path='/productos' element={<ItemListContainer greeting="Todos los productos" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Seleccionaste la categoria: " />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/zonabiker' element={<ZonaBiker />} />
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/galeria' element={<Galeria />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </CartProvider>

      {/* <FetchApi /> */}
    </BrowserRouter>
  )
}

export default App



