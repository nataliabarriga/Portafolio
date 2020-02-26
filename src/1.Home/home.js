import React, { Component } from "react";
import "../styles.css";
import home from "../img/home.png"


class Home extends Component {
    render() {
        return (
            <header className="header">
                <div className="oneContainer alignLeft noPadding">
                    <h4 className="yellow">¡Hola!</h4>
                    <h1 className="purple">Soy Natalia Barriga</h1>
                    <h5 className="purple">Front-End y Diseñadora Crossmedia</h5>
                </div>
                <div className="imgContainer alignCenterRow margin">
                    <img src={home} alt="Home" />
                </div>
            </header>
        )
    }
}


export default Home;