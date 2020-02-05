import React, { Component } from "react";
import "./about.css";
import cv from "../img/CVBarriga.pdf"

class About extends Component{
    render(){
        return(
            <div className="containerOne" id="#about">
                <div className="halfBoxOne">
                    <p className="alignRight">Soy desarrolladora front-end y diseñadora crossmedia de profesión. Me caracterizo por tener una mente inquieta, sentido social y espíritu creador. Tengo muy buena disposición para el trabajo en equipo y facilidad para aprender. Siempre tengo ganas de incorporar nuevas habilidades y de enfrentar desafíos, por esta razón postulé a Laboratoria, que además de entregarme herramientas de trabajo, me dio la oportunidad de encantarme con el código para construir plataformas digitales que den soluciones eficientes e innovadoras a quienes lo necesiten.</p>
                </div>
                <div className="halfBoxTwo">
                    <h2>Sobre mi</h2>
                    <a href={cv} target="blank"><button className="download">Descarga mi curriculum</button></a>
                </div>
            </div>
        )
    }
}

export default About;