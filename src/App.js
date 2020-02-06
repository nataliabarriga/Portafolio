import React from 'react';
import Nav from "./1.Home/nav"
import Home from "./1.Home/home"
import About from "./2.About/about"
import Develop from "./2.About/develop"
import Design from "./2.About/design"
import Proyects from "./3.Proyects/proyects"
import Contact from "./4.Contact/contact"

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Develop />
      <Design />
      <Proyects />
      <Contact />
    </div>
  )
}

export default App;
