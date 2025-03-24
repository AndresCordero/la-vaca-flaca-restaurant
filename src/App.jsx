import './App.css'
import Contador from './components/Contador'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'
import FetchApi from './mock/FetchApi'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import  ItemDetailContainer from './components/ItemDetailContainer'



/* Este es el Router */

function App() {
  return (
    <BrowserRouter> {/*Componente del Router instalado*/}
      <NavbarComponent /> {/*Va fuera de Routes para que se muestre en todos lados*/}
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a la Vaca Flaca" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Seleccionaste la categoria: " />} />
        <Route path= '/item' element={<ItemDetailContainer/>} />
      </Routes>

      <FetchApi />
    </BrowserRouter>
  )
}

export default App



