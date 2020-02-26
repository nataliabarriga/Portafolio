import React, { Component } from "react";
import "../styles.css";
import correo from "../img/mail.png"
import linkedin from "../img/linkedin.png"
import github from "../img/github.png"
import lab from "../img/lab.png"
import ScrollableAnchor from "react-scrollable-anchor"

class Contact extends Component {
    render() {
        return (
            <ScrollableAnchor id="contact">
            <div className="generalContainer alignCenterColumn imgFondo">
                <h2 className="yellow">Contacto</h2>
                <p className="description">Si te gustó mi trabajo o quieres saber más sobre mi perfil profesional, ¡Contáctame!</p>
                <div className="oneContainer alignCenterRow">
                    <a href="mailto:nbarrigamz@gmail.com" target="blank"><button className="btnRRSS"><img src={correo} alt="icono"/>Correo</button></a>
                    <a href="https://www.linkedin.com/in/nbarrigamz/" target="blank"><button className="btnRRSS"><img src={linkedin} alt="icono"/>LinkedIn</button></a>
                    <a href="https://github.com/nataliabarriga" target="blank"> <button className="btnRRSS"><img src={github} alt="icono" />Github</button></a>
                    <a href="https://app.talento.laboratoria.la/profile/G0Lfr71MsqZ9QXmjp0iLXqkK4Y43" target="blank"><button className="btnRRSS"><img className="imgRRSS" src={lab} alt="icono"/>Talento Lab</button></a>
                </div>
            </div>
            </ScrollableAnchor>
        )
    }
}

export default Contact;