import React, { Component } from "react";
import "../styles.css";
import amigosecreto from "../img/amigosecreto.png"
import rickymorty from "../img/rickymorty.png"
import papitas from "../img/papitas.png"
import burguer from "../img/burguer.png"
import back from "../img/Fback.png"
import next from "../img/Fnext.png"
import ScrollableAnchor from "react-scrollable-anchor"

class Cards extends Component {
    render() {
        return (
            <div className="proyectCards">
                <img src={this.props.img} alt="imgProyects" />
                <div className="infoCards">
                    <h4 className="purple">{this.props.title}</h4>
                    <p className="description">{this.props.text}</p>
                    <div className="btnContainer">
                        <a href={this.props.demo} target="blank"><button className="btnDemo">Demo</button></a>
                        <a href={this.props.code} target="blank"><button className="btnCode">Código</button></a>
                    </div>
                </div>
            </div>
        )
    }
}


class Proyects extends Component {
    render() {
        return (
            <ScrollableAnchor id="proyects">
                <div className="generalContainer alignCenterColumn">
                    <div className="twoContainer">
                        <h2 className="yellow">Proyectos</h2>
                        <p className="purple">Como parte del proceso de aprendizaje y trabajo de Laboratoria, realicé varios proyectos tanto individuales como en colaboración de mis compañeras, usando diversas herramientas de desarrollo web y para distintos formatos de pantalla. A continuación puedes ver algunos de mis proyectos.</p>
                    </div>
                    <div className="proyectsContainer">
                        <button className="btnArrow"> <img src={back} alt="imgProyects" /> </button>
                        <div className="proyectScroll">
                            <Cards
                                title="Y qué papitas?"
                                img={papitas}
                                text="Red social mobile desarrollada en JS y Firebase. Facilita la búsqueda de un lugar para comer papitas."
                                demo="https://nataliabarriga.github.io/SCL011-Social-Network/src/index.html"
                                code="https://github.com/nataliabarriga/SCL011-Social-Network" />
                            <Cards
                                title="Amigo Secreto"
                                img={amigosecreto}
                                text="Aplicación web de escritorio desarrollada en JS, cuyo fin es facilitar el juego del amigo secreto."
                                demo="https://nataliabarriga.github.io/SCL011-Cipher/src/index.html"
                                code="https://github.com/nataliabarriga/SCL011-Cipher" />
                            <Cards
                                title="Burguer Queen"
                                img={burguer}
                                text="Sistema para tablets desarrollado en React y Firebase. Acelera y agiliza la tarea de realizar pedidos."
                                demo="https://k1ltr4squeen.firebaseapp.com/"
                                code="https://github.com/nataliabarriga/SCL011-Burger-Queen" />
                            <Cards
                                title="Ricky & Morty"
                                img={rickymorty}
                                text="Web desarrollada en JS y una Api, enfocada en los fans de Rick & Morty, para que conozcan más a sus personajes."
                                demo="https://nataliabarriga.github.io/SCL011-data-lovers/src/index.html"
                                code="https://github.com/nataliabarriga/SCL011-data-lovers" />
                        </div>
                        <button className="btnArrow"> <img src={next} alt="imgProyects" /> </button>
                    </div>
                </div>
            </ScrollableAnchor>
        )
    }
}


export default Proyects;