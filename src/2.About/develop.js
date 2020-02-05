import React, { Component } from "react";
import "./develop.css";
import html5 from "../img/html5.png"
import css from "../img/css.png"
import js from "../img/javascript.png"
import firebase from "../img/firebase.png"
import git from "../img/git.png"
import github from "../img/github.png"
import react from "../img/react.png"
import visual from "../img/visual.png"

class IconCards extends Component{
    render(){
        return(
            <div className="iconBox">
                <img alt="icon" className="icon" src={this.props.img}></img>
                <p className="nameIcon">{this.props.name}</p>
            </div>
        )
    }
}


class Develop extends Component{
    render(){
        return(
            <div className="containerOne">
                <div className="halfBoxTwo">
                    <h2 className="alignRight yellow">Develop</h2>
                    <h3 className="alignRight">Habilidades Técnicas</h3>
                    <p className="description alignRight">Durante el bootcamp de Laboratoria, trabajé explorando diversas herramientas de desarrollo que me permitieron crear proyectos completos desde la lógica hasta el diseño visual.</p>
                </div>
                <div className="halfBoxThree">
                    <div className="iconContainer">
                        <IconCards
                        name="Html5"
                        img={html5}/>
                         <IconCards
                        name="Css3"
                        img={css}/>
                         <IconCards
                        name="JavaScript"
                        img={js}/>
                         <IconCards
                        name="Firebase"
                        img={firebase}/>
                    </div>
                    <div className="iconContainer">
                    <IconCards
                        name="Git"
                        img={git}/>
                         <IconCards
                        name="Github"
                        img={github}/>
                         <IconCards
                        name="React"
                        img={react}/>
                         <IconCards
                        name="Visual"
                        img={visual}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Develop;