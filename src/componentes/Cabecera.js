const Cabecera = () => {
    return (
        
        <header className="container-fluid" >
            <div className="row fluid" style={{ 'background-color': '#06174b'}}>
                <div className="col-2">
                    <a href="/"><img src="./logo1.jpg" alt="Logo" className="logo"/></a>
                </div>
                <div className="col-8">
                    <p >Cargar Transportes y Logística Ltda</p>
                </div>
                <div className="col-2">
                    <img src="./user.jpg" alt="" className="user"/>
                </div>
            </div>
        </header>
      
    )
}

export default Cabecera

