import React from "react";
import './Footer.css';
const Footer = () => {
    return (
        <>
<div className="foot-top">

<div className="foot-one">
  <div className="image-foot">
    <img src="gulahmed-logo_1.webp"/>
  </div>
  
  

  <div className="button-foot">
     <a>Customer Feedback</a> 
  </div>
 </div>  

 <div className="foot-two">
   <div className="foot-two-heading">
     <h3>ABOUT GULAHMED</h3>
   </div>
    
    <div className="foot-two-sub">
       <div className="About-us">
          <a>About-us</a>
       </div>

       <div className="company">
          <a>Company</a>
       </div>

        <div className="careers">
           <a>Careers</a>
        </div>

        <div className="store-locator">
           <a>Store-locator</a>
        </div>
     </div>
   </div>

 <div className="foot-three">
   <div className="foot-three-heading">
     <h3>MY ACCOUNT</h3>
   </div>
  
   <div className="foot-three-sub">
      <div className="login">
         <a>Login</a> 
       </div>

        <div className="About-us">
           <a>Order History</a> 
         </div>

         <div className="About-us">
            <a>Order Status</a> 
         </div>
       </div>
 </div>


 <div className="foot-four">
   <div className="foot-four-heading">
     <h3>CUSTOMER CARE</h3>
   </div>

   <div className="foot-four-sub">
      <div className="About-us">
         <a>Contact Us</a> 
      </div>

        <div className="company">
          <a>Complaint</a> 
        </div>

        <div className="careers">
          <a>FAQ</a> 
         </div>

         <div className="store-locator">
           <a>Shipping Policy</a> 
         </div>

         <div className="About-us">
            <a>Return And Exchanges</a> 
         </div>

          <div className="company">
            <a>Privacy Policy</a> 
         </div>

           <div className="careers">
              <a>Services</a> 
           </div>

           <div className="store-locator">
              <a>Visual Search</a> 
           </div>
         </div>
       </div>
     </div>
    <div className="foot-strip">
       <img src="download.png"/>
       <h5>© Gul Ahmed Textile Mills Limited.</h5>
    </div>
        </>
    );
};

export default Footer;