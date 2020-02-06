import React, { Component } from "react";
import "./contact.css";
import correo from "../img/mail.png"
import linkedin from "../img/linkedin.png"
import github from "../img/github.png"
import lab from "../img/lab.png"
import ScrollableAnchor from "react-scrollable-anchor"

class Contact extends Component{
    render(){
        return(
            <ScrollableAnchor id="contact">
            <div className="containerOne" id="contact">
                <div className="halfBoxOne">
                    <a href="mailto:nbarrigamz@gmail.com" target="blank"><button className="iconRRSS"><img className="imgRRSS" src={correo} alt="icono" ></img>Correo</button></a>
                    <a href="https://www.linkedin.com/in/nbarrigamz/" target="blank"><button className="iconRRSS"><img className="imgRRSS" src={linkedin} alt="icono" ></img>LinkedIn</button></a>
                    <a href="https://github.com/nataliabarriga" target="blank"> <button className="iconRRSS"><img className="imgRRSS" src={github} alt="icono" ></img>Github</button></a>
                    <a href="" target="blank"><button className="iconRRSS"><img className="imgRRSS" src={lab} alt="icono" ></img>Talento Lab</button></a>
                </div>
                <div className="halfBoxTwo">
                    <h2>Contacto</h2>
                    <p className="description">Si te gustó mi trabajo o quieres saber más sobre mi perfil profesional, ¡Contáctame!</p>
                </div>
            </div>
            </ScrollableAnchor>
        )
    }

}

export default Contact;