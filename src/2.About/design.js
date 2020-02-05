import React, { Component } from "react";
import "./design.css";
import ai from "../img/ai.png"
import ps from "../img/ps.png"
import id from "../img/id.png"
import pr from "../img/pr.png"
import ae from "../img/ae.png"
import figma from "../img/figma.png"

class IconCards extends Component{
    render(){
        return(
            <div className="iconBox">
                <img alt="icon" className="icon" src={this.props.img}></img>
                <p className="nameIconDesign">{this.props.name}</p>
            </div>
        )
    }
}

class Design extends Component{
    render(){
        return(
            <div className="containerOne">
                <div className="halfBoxThree">
                    <div className="iconContainer">
                        <IconCards
                        img={ai}
                        name="Illustrator"/>
                         <IconCards
                        img={ps}
                        name="Photoshop"/>
                         <IconCards
                        img={id}
                        name="InDesign"/>
                    </div>
                    <div className="iconContainer">
                        <IconCards
                        img={pr}
                        name="Premier Pro"/>
                         <IconCards
                        img={ae}
                        name="After Effects"/>
                         <IconCards
                        img={figma}
                        name="Figma"/>
                    </div>
                </div>
                <div className="halfBoxTwo">
                    <h2>Design</h2>
                    <h3>Habilidades Técnicas</h3>
                    <p className="description">A lo largo de la carrera de diseño crossmedia, utilicé herramientas de la suit adobe, que me permitieron desarrollar piezas gráficas, editoriales y audiovisuales.</p>
                </div>
            </div>
        )
    }

}

export default Design;