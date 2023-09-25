//import logo from './logo.svg'
import './App.css'
import ListaUsuario from './ListaUsuario'
import AgregarUsuario from './AgregarUsuario'
import EditarUsuario from './EditarUsuario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>

    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Vanerb</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="agregarusuario">Agregar usuario</a>
            </li>

          </ul>

        </div>
      </nav>






      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuario></ListaUsuario>} exact></Route>
          <Route
            path='/agregarusuario'
            element={<AgregarUsuario></AgregarUsuario>}
            exact
          ></Route>
          <Route
            path='/editarusuario/:idusuario'
            element={<EditarUsuario></EditarUsuario>}
            exact
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
