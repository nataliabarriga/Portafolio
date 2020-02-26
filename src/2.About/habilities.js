import React, { Component } from "react";
import "../styles.css";
import ScrollableAnchor from "react-scrollable-anchor"

import html5 from "../img/html5.png"
import css from "../img/css.png"
import js from "../img/javascript.png"
import firebase from "../img/firebase.png"
import git from "../img/git.png"
import github from "../img/github.png"
import react from "../img/react.png"
import visual from "../img/visual.png"

import ai from "../img/Ai.png"
import ps from "../img/Ps.png"
import id from "../img/Id.png"
import pr from "../img/Pr.png"
import ae from "../img/Ae.png"
import figma from "../img/Figma.png"

class IconCards extends Component {
    render() {
        return (
            <div className="boxIcon alignCenterColumn">
                <img alt="icon" src={this.props.img}></img>
                <p className="nameIcon">{this.props.name}</p>
            </div>
        )
    }
}


class Habilities extends Component {
    render() {
        return (
            <ScrollableAnchor id="habilities">
                <div className="generalContainer">
                    <div className="oneContainer alignCenterColumn noPadding">
                        <h3 className="yellow">Front-end</h3>
                        <div className="iconosContainer">
                            <IconCards
                                name="Html5"
                                img={html5} />
                            <IconCards
                                name="Css3"
                                img={css} />
                            <IconCards
                                name="JavaScript"
                                img={js} />
                            <IconCards
                                name="Firebase"
                                img={firebase} />
                        </div>
                        <div className="iconosContainer">
                            <IconCards
                                name="Git"
                                img={git} />
                            <IconCards
                                name="Github"
                                img={github} />
                            <IconCards
                                name="React"
                                img={react} />
                            <IconCards
                                name="Visual"
                                img={visual} />
                        </div>
                    </div>
                    <div className="oneContainer alignCenterColumn noPadding">
                        <h3 className="yellow">Diseño</h3>
                        <div className="iconosContainer" >
                            <IconCards
                                img={ai}
                                name="Illustrator" />
                            <IconCards
                                img={ps}
                                name="Photoshop" />
                            <IconCards
                                img={id}
                                name="InDesign" />
                        </div>
                        <div className="iconosContainer" >
                            <IconCards
                                img={pr}
                                name="Premier Pro" />
                            <IconCards
                                img={ae}
                                name="After Effects" />
                            <IconCards
                                img={figma}
                                name="Figma" />
                        </div>
                    </div>
                </div>
            </ScrollableAnchor>
        )
    }
}

export default Habilities;