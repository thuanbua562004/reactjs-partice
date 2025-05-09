import React, { useState } from "react";
import Header from "./component/Header";
import Intro from "./component/Intro";
import './i18n';
import "./index.css";
import TheHelp from './component/TheHelp'
import Cause from "./component/Causes";
import Login from "./component/Login";
import Footer from "./component/Footer";
function App() {
  return (
    <>
    <div className="dark:bg-color-dark">
        <Header />
      <Intro />
      <TheHelp/>
      <Cause/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
