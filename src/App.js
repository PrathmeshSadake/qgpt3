import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  WhatGPT3,
  Features,
  Header,
} from "./containers/index";
import { Brand, CTA, Navbar } from "./components/index";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
