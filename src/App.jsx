import './App.css'
import Contador from './components/Contador'
import NavbarComponent from './components/NavbarComponent'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
      <NavbarComponent/>
      <ItemListContainer greeting= "Bienvenidos a la Vaca Flaca"/>
     {/*  <Contador/> */}
    </>
  )
}

export default App
