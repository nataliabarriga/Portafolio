import React, { Component, useEffect } from "react";
import "./nav.css";


class Nav extends Component {
    
    render() {

        return (
                <nav>
                    <a href="#about"><button className="btnNav">Sobre mi</button></a>
                    <a href="#proyects"><button className="btnNav">Proyectos</button></a>
                    <a href="#contact"><button className="btnNav">Contacto</button></a>
                </nav>
        )
    }
}

export default Nav;