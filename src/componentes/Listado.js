const Listado = () => {
    return (
        <ul class="list-group">
  <li class="list-group-item nombres">Usuario 1</li>
  <div class="dropdown botones3">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Opciones
  </a>

  <ul class="dropdown-menu botones" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Ver</a></li>
    <li><a class="dropdown-item" href="#">Editar</a></li>
    <li><a class="dropdown-item botones2" href="#">Eliminar</a></li>
  </ul>
</div>
  <li class="list-group-item nombres">Usuario 2</li>
  <div class="dropdown botones3">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Opciones
  </a>

  <ul class="dropdown-menu botones" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Ver</a></li>
    <li><a class="dropdown-item" href="#">Editar</a></li>
    <li><a class="dropdown-item botones2" href="#">Eliminar</a></li>
  </ul>
</div>
  <li class="list-group-item nombres">Usuario 3</li>
  <div class="dropdown botones3">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Opciones
  </a>

  <ul class="dropdown-menu botones" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="#">Ver</a></li>
    <li><a class="dropdown-item" href="#">Editar</a></li>
    <li><a class="dropdown-item botones2" href="#">Eliminar</a></li>
  </ul>
</div>
  </ul>

    )
}
export default Listado