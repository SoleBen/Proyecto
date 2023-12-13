import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './componentes/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Inicio } from './componentes/Paginas/Inicio';
import { Nosotros } from './componentes/Paginas/Nosotros';
import { Productos } from './componentes/Paginas/Productos';
import { Registro } from './componentes/Paginas/Registro';
import { Signup } from './componentes/Paginas/Signup';
import Footer from './componentes/Paginas/Footer';

function App() {
  return (
    <div className="App">
        <NavBar/>
          <Routes>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
