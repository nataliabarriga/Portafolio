import React, { Component } from "react";
import "../styles.css";
import cv from "../img/CVBarriga.pdf"
import about from "../img/about.png"
import ScrollableAnchor from "react-scrollable-anchor"


class About extends Component {
    render() {
        return (
            <ScrollableAnchor id="about">
            <div className="generalContainer">
                <div className="imgContainer">
                    <img src={about} alt="about"/>
                </div>
                <div className="oneContainer margin">
                    <h2 className="yellow">Sobre mi</h2>
                    <p className="purple">Soy desarrolladora front-end y diseñadora crossmedia de profesión. Me caracterizo por tener una mente inquieta, sentido social y espíritu creador. Tengo muy buena disposición para el trabajo en equipo y facilidad para aprender. Siempre tengo ganas de incorporar nuevas habilidades y de enfrentar desafíos, por esta razón postulé a Laboratoria, que además de entregarme herramientas de trabajo, me dio la oportunidad de encantarme con el código para construir plataformas digitales que den soluciones eficientes e innovadoras a quienes lo necesiten.</p>
                    <a href={cv} target="blank">
                        <button className="btnPurple">Descarga mi curriculum</button>
                    </a>
                </div>
            </div>
            </ScrollableAnchor>
        )
    }
}


export default About;