import { Link } from 'react-router-dom';
const Botoncrear = () => {
    return (
        <button type="button" className="btn btn-primary btn-lg botoncrear">
        <Link to="/CrearUsuario" className="link2">Crear Usuario </Link></button>

    )
}

export default Botoncrear