import React from 'react'
import Cabecera from '../componentes/Cabecera'
import Menu from '../componentes/Menu'
import Pie from '../componentes/Pie'

function Quienessomos() {
    return (
        <>
        <Cabecera/>
        <Menu/>
        <div>
            <h1 className="title">Quienes Somos</h1>
            <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quia aut rem in? Temporibus doloremque animi vel dicta sunt deserunt repellat, nostrum autem corrupti fuga totam vero sapiente modi officia beatae sint illum dolore necessitatibus commodi. Amet eveniet in molestiae, impedit commodi facilis ipsa quo deleniti atque necessitatibus distinctio ea ab debitis mollitia obcaecati, perferendis error, eum corporis rem saepe iste! Earum, voluptate architecto. Architecto asperiores rerum cupiditate natus. Aliquid.</p>
            </div>
            <div className="row">
                <div className="col">
                    <div className="caja container">
                        <h2 className="title">Misión</h2>
                        <img src="./images/camion.jpg" alt=""/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae placeat ipsa eum. Incidunt tenetur ut corrupti aliquid cum consequatur, vitae recusandae, harum perspiciatis quia delectus exercitationem quae at nisi?</p>
                    </div>
                    
                </div>
                <div className="col">
                    <div className="caja container">
                        <h2 className="title">Visión</h2>
                        <img src="./images/quality-control.jpg" alt=""/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero repudiandae placeat ipsa eum. Incidunt tenetur ut corrupti aliquid cum consequatur, vitae recusandae, harum perspiciatis quia delectus exercitationem quae at nisi?</p>
                    </div>
                    
                </div>
            </div>
        </div>
        <Pie/>
        </>
    )
}

export default Quienessomos
