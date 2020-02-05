import React, { Component } from "react";
import "./home.css";
import About from "../2.About/about"


class Home extends Component {
    render() {
        return (
            <header>
                <nav>
                    <button className="btnNav">Sobre mi</button>
                    <button className="btnNav">Proyectos</button>
                    <button className="btnNav">Contacto</button>
                </nav>
                <div className="presentationContainer">
                    <div className="presentationBox">
                        <h1>Hola soy </h1>
                        <h1>Natalia Barriga</h1>
                    </div>
                    <div className="presentationBoxCircle">
                    </div>
                </div>
            </header>
        )
    }
}

export default Home;