import logo from './logo.svg'
import './App.css'
import ListaUsuario from './ListaUsuario'
import AgregarUsuario from './AgregarUsuario'
import EditarUsuario from './EditarUsuario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <h1>CRUD MERN STACK</h1>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuario></ListaUsuario>} exact></Route>
          <Route
            path='/agregarusuario'
            element={<AgregarUsuario></AgregarUsuario>}
            exact
          ></Route>
          <Route
            path='/editarusuario'
            element={<EditarUsuario></EditarUsuario>}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
