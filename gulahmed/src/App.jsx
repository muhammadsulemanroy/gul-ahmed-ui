import React from "react";
import Wrapper from "./components/Wrapper";
import "./App.css";
import { DarkModeProvider } from "./context";

const App =(props)=> {

   return (
         <>
          <DarkModeProvider>
            <Wrapper/>
          </DarkModeProvider>
        </>
          );
};

export default App;