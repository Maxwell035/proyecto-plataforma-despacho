import React from 'react'

const Pie = () => {
    return (
        <footer>
        <div className="row fluid" id="footer">
            <div className="col-8">
                <p><img src="./images/agente.jpg" alt="" id="call"/>
                Línea Nacional: 01 8000 37 94</p>
            </div>
            <div className="col 4" style={{ 'margin-top': '2%' }}>
                <a href="#"><img src="./images/facebook.jpg" alt="faceboock" className="redes"/></a>
                <a href="#"><img src="./images/instagram.jpg" alt="instagram" className="redes"/></a>
                <a href="#"><img src="./images/twitter.jpg" alt="twitter" className="redes"/></a>
                
                
            </div>
        </div>
    </footer>
    )
}

export default Pie
