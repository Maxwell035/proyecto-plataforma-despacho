import VerUsuario from './Pages/VerUsuario';
import Administrador from './Pages/Administrador';
import EditarUsuario from './Pages/EditarUsuario';
import CrearUsuario from './Pages/CrearUsuario';
import './styles.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
 
 
 
function App() {
  return (
 
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Administrador/>}/>  
          <Route path="/VerUsuario" element= {<VerUsuario/>}/>  
          <Route path="/EditarUsuario" element= {<EditarUsuario/>}/>
          <Route path="/CrearUsuario" element= {<CrearUsuario/>}/>
        </Routes>
      </BrowserRouter>
 
    </div>
 
 
  );
}
 
export default App;

