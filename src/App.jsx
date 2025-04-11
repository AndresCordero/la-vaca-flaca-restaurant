import './App.css'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import FetchApi from './mock/FetchApi'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ErrorPage from './components/ErrorPage'
import News from './components/News'
import Galeria from './components/Galeria'
import Motocross from './components/Motocross'
import { CartProvider } from './components/context/CartContext'



/* Este es el Router */

function App() {
  return (
    <BrowserRouter> {/*Componente del Router instalado*/}
      <CartProvider>
        <NavbarComponent /> {/*Va fuera de Routes para que se muestre en todos lados*/}
        <Routes>
          <Route path='/' element={< News />} />
          <Route path='/productos' element={<ItemListContainer greeting="Todos los productos" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting="Seleccionaste la categoria: " />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/motocross' element={<Motocross />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </CartProvider>

      {/* <FetchApi /> */}
    </BrowserRouter>
  )
}

export default App



