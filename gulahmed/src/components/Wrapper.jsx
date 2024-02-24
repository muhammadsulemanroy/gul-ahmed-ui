import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import Footer from "./Footer";
import { useContext } from "react";
import { DarkModeContext } from "../context";
const Wrapper=()=> {
  const {darkMode,setDarkMode}= useContext(DarkModeContext);
    return(
        <section style={{backgroundColor: darkMode ? "#000":"#fff" , height:"100vh"}}>
          <Navbar/>
          <Section/>
          <Footer/>
        </section>
    );
}

export default Wrapper;