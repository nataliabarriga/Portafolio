import React from 'react';
import Nav from "./1.Home/nav"
import Home from "./1.Home/home"
import About from "./2.About/about"
import Habilities from "./2.About/habilities"
import HabilitiesTitle from "./2.About/habilitiesTitle"

import Proyects from "./3.Proyects/proyects"
import Contact from "./4.Contact/contact"


function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <HabilitiesTitle />
      <Habilities />
      <Proyects />
      <Contact />
    </div>
  )
}

export default App;
