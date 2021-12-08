import { Link } from "react-router-dom";

const Listado = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item nombres">Usuario 1</li>
                <div className="dropdown botones3">
                      <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Opciones
                      </a>

                      <ul className="dropdown-menu botones" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#"><Link to="VerUsuario"> Ver </Link></a></li>
                        <li><a className="dropdown-item" href="/EditarUsuario"><Link to="EditarUsuario"> Editar </Link></a></li> 
                        <li><a className="dropdown-item botones2" href="#"><Link to="EditarUsuario" className="Link link"> Eliminar </Link></a></li>
                      </ul>
                </div>

            <li className="list-group-item nombres">Usuario 2</li>
                <div className="dropdown botones3">
                      <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Opciones
                      </a>

                      <ul className="dropdown-menu botones" aria-labelledby="dropdownMenuLink">
                        <li><a className="dropdown-item" href="#"><Link to="VerUsuario"> Ver </Link></a></li>
                        <li><a className="dropdown-item" href="#"><Link to="EditarUsuario "> Editar </Link></a></li>
                        <li><a className="dropdown-item botones2" href="#"><Link to="EditarUsuario " className="link link"> Eliminar </Link></a></li>
                      </ul>
              </div>

  <li className="list-group-item nombres">Usuario 3</li>
  <div className="dropdown botones3">
  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Opciones
  </a>

  <ul className="dropdown-menu botones" aria-labelledby="dropdownMenuLink">
    <li><a className="dropdown-item" href="#">
    <Link to="VerUsuario"> Ver </Link>
    </a></li>
    <li><a className="dropdown-item" href="#">
    <Link to="EditarUsuario"> Editar </Link>
    </a></li>
    <li><a className="dropdown-item botones2" href="#">
    <Link to="EditarUsuario" className="link link"> Eliminar </Link>
    </a></li>
  </ul>
</div>
  </ul>

    )
}
export default Listado;