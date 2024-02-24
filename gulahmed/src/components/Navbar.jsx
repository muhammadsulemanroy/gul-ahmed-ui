import React from "react";
import './Navbar.css';
import { Exchange,TruckDelivery,BookOff,User,ArrowBadgeRight} from 'tabler-icons-react';
import {FaCartArrowDown} from 'react-icons/fa';
import { useContext } from "react";
import Input from "./Input";
import { DarkModeContext } from "../context";
const Navbar =()=> {
  const[darkMode, setDarkMode] = useContext(DarkModeContext);

   return(
    <>

  <header>
    <div className="head-one">

      <div className="currency">
        <div className="select-currency">
          <h4>SELECT CURRENCY:</h4> 
        </div>
         
        <div className="flag">
          <img src="https://flagcdn.com/16x12/pk.png"/>
        </div> 
       
        <div className="pkr">
          <h4>PKR</h4>
        </div>
      </div>
      
       <div className="currency-right">
          <div className="return">
           <Exchange/>
           <h5> RETURN & EXCHANGES</h5>
          </div>

          <div className="track-order">
             <TruckDelivery/>
             <h5>TRACK ORDER</h5>
          </div>

          <div className="look-book">
             <BookOff/>
             <h5>Look Book</h5>
          </div>

         <div className="SIGN-IN"> 
            <User/>
            <h5>SIGN IN</h5>
         </div>

         {!darkMode ? (
           <div className="switch-checkbox"> 
           <label className="switch">
              <input 
                type="checkbox"
                onClick={()=> setDarkMode(true)}
               />
               <span className="slider round"></span>
             </label>
            </div>
            ): (

            <div className="switch-checkbox"> 
           <label className="switch">
              <input 
                type="checkbox"
                onClick={()=> setDarkMode(false)}
               />
               <span className="slider round"></span>
             </label>
            </div>
            )}

         </div>
         
         

    
   
       </div>
  

    <div className="head-two">

    <div className="gul-ahmed-image">
    <img src="gulahmed-logo_1.webp"/>
    </div>
     
     <div className="headtwo-right"> 
      <Input/>
     </div>

     <div className="cart-icon">
        <FaCartArrowDown size="40px"/>
     </div>
  
    </div>
      
      <div className="button-sale">
         <button>SALE</button>
      </div>

    <div className="head-three">
     
      <div className="pakistan-day">
         PAKISTAN DAY
      </div>

      <div className="pakistan-day">
         LAWN 2023
      </div>

      <div className="pakistan-day">
        UNSTITCHED
      </div>

      <div className="pakistan-day">
        SALT
      </div>

      <div className="pakistan-day">
        WOMEN
      </div>

      <div className="pakistan-day">
       MEN
      </div>

      <div className="pakistan-day">
        SHOES
      </div>

      <div className="pakistan-day">
       BAGS
      </div>

      <div className="pakistan-day">
        KIDS
      </div>

    </div>

    <div className="head-four">
   
      <div className="home">
        HOME   
      </div>

      <div className="arrow">
      <ArrowBadgeRight/>
      </div>

      <div className="men">
        MEN
      </div>
      
      <div className="arrow">
      <ArrowBadgeRight/>
      </div>

      <div className="western">
        WESTERN
      </div>
      

      <div className="arrow">
      <ArrowBadgeRight/>
      </div>

      <div className="casual-shirts">
        CASUAL SHIRTS
      </div>
       
      <div className="arrow">
      <ArrowBadgeRight/>
      </div>

      <div className="smart-casuals">
        SMART-CASUALS
      </div>
       
      <div className="arrow">
      <ArrowBadgeRight/>
      </div>

      <div className="navy-basic-smart">
         NAVY BASIC SMART SC-YD22-013
      </div>
      
      </div>
  </header>     



    </>
   );
}

export default Navbar;