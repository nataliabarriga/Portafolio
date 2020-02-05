import React, { Component } from "react";
import "./proyects.css";
import amigosecreto from "../img/amigosecreto.png"
import rickymorty from "../img/rickymorty.png"
import papitas from "../img/papitas.png"
import burguer from "../img/burguer.png"

class Cards extends Component {
    render() {
        return (
            <div className="proyectBox">
                <img className="imgProyects" src={this.props.img} alt="imgProyects"></img>
                <h4>{this.props.title}</h4>
                <p className="description noMargin">{this.props.text}</p>
                <div className="btnContainer">
                    <a href={this.props.demo} target="blank"><button className="btnProyect">Demo</button></a>
                    <a href={this.props.code} target="blank"><button className="btnProyect">Código</button></a>
                </div>
            </div>
        )
    }
}

class Proyects extends Component {
    render() {
        return (
            <div className="containerOne">
                <div className="halfBoxTwo">
                    <h2 className="alignRight yellow">Proyectos</h2>
                    <p className="description alignRight">Como parte del proceso de aprendizaje y trabajo de Laboratoria, realicé varios proyectos tanto individuales como en colaboración de mis compañeras, usando diversas herramientas de desarrollo web y para distintos formatos de pantalla. A continuación puedes ver algunos de mis proyectos.</p>
                </div>
                <div className="halfBoxFour">
                    <Cards
                    title="Y qué papitas?"
                    img={papitas}
                    text="Red social mobile desarrollada en JS y Firebase. Facilita la búsqueda de un lugar para comer papitas."
                    demo="https://nataliabarriga.github.io/SCL011-Social-Network/src/index.html"
                    code="https://github.com/nataliabarriga/SCL011-Social-Network"/>
                    <Cards
                    title="Amigo Secreto"
                    img={amigosecreto}
                    text="Aplicación web de escritorio desarrollada en JS, cuyo fin es facilitar el juego del amigo secreto."
                    demo="https://nataliabarriga.github.io/SCL011-Cipher/src/index.html"
                    code="https://github.com/nataliabarriga/SCL011-Cipher"/>
                    <Cards
                    title="Burguer Queen"
                    img={burguer}
                    text="Sistema para tablets desarrollado en React y Firebase. Acelera y agiliza la tarea de realizar pedidos."
                    demo="https://k1ltr4squeen.firebaseapp.com/"
                    code="https://github.com/nataliabarriga/SCL011-Burger-Queen"/>
                    <Cards
                    title="Ricky & Morty"
                    img={rickymorty}
                    text="Web desarrollada en JS y una Api, enfocada en los fans de Rick & Morty, para que conozcan más a sus personajes."
                    demo="https://nataliabarriga.github.io/SCL011-data-lovers/src/index.html"
                    code="https://github.com/nataliabarriga/SCL011-data-lovers"/>
                </div>
            </div>
        )
    }

}

export default Proyects;