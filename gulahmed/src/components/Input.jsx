import React from "react";
import './Input.css';
import {FaSearch} from "react-icons/fa";

const Input =()=> {
    return (
        <> 
          <div className="container">
            <input className="input-right" placeholder="SEARCH:&nbsp;&nbsp;&nbsp;" />
            <div id="box b1">bag</div>
            <div id="box b2">plastic</div>
            <div id="box b3">good</div>
            <div id="box b4">bad</div>
            <div id="box b5">sure</div>
            <button className="search-box">extra<FaSearch /> </button>
          </div>  
        </>
    );
};
export default Input;