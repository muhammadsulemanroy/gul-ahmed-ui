import { useState,useRef } from "react";
import './Section.css';
import {FaTwitterSquare,FaWhatsappSquare} from 'react-icons/fa';
import ReactImageMagnify from 'react-image-magnify';
const images = [
  'navy.jpg',
  'navyone.jpg',
  'navytwo.jpg',
  'navythree.jpg',
  'navyfour.jpg',
]
const Section=()=> {
const [showtext, setShowText]=useState(1);
  
const handleButtonClick = (e)=> {
  setShowText(e);
}
  const [img, setImg] = useState(images[0]);
  const clickHandler=(image,i) => {
    setImg(image);
    refs.current[i].classList.add('active');
    for(var j=0;j<images.length; j++) {
      if (i !==j) {    
        refs.current[j].classList.remove('active');
      }
    }
  };

  const refs=useRef([])
  refs.current=[];
  const addRefs =(el) => {
    if(el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };
    return(
        <>
      <div className="section-whole">
        <div className="images-container">
  
            <div className="left">
               <div className="left_2">
          
                  <ReactImageMagnify {
                    ...{
                  
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: img,
                            sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                        },
                        largeImage: {
                            src: img,
                            width: 1200,
                            height: 1800,
                            
                        }
                    }} />
               </div> 
              
               <div className="left_1">
                   {images.map((image, i)=> (
                     <div 
                    
                        >
                         <img 
                         src={image} 
                         alt=""
                         className={i==1? 'img_wrap active' : 'img_wrap'}
                         key={i}
                         onMouseDown={()=> clickHandler(image, i)}
                         ref={addRefs}
                         />
                     </div>
                   ))}
               </div>
              
            </div>
       </div>

<div className="section-text-top">

<div className="text-one">
   Navy Basic Smart Casual SC-YD22-013
</div>

<div className="text-two">
  SKU M-AP-23-316572 -P
</div>

<div className="text-three">
  OUT OF STOCK
</div>

<a className="text-four">
  Notify me when this product is in stock
</a>

<div className="wish-button">
 <button>WISHLIST</button>
</div>

<div className="size-button">
  <button>SIZECHART</button>
</div>
<div className="button-icons">

  <div className="share-button">
   <button>SHARE</button>
  </div>

  <div className="social-icons">
     <div className="social-media-section">
       <FaTwitterSquare size="2rem" color="#3fc5eb"/>
     </div>

     <div className="social-media-section">
       <FaWhatsappSquare color="#28aa00"  size="2rem"/>
     </div>
    
    </div>
  
</div>

</div>

</div>

<div className="section-details-top">

<div className="details-group">
<div className={showtext===1 ? "nav-link active":"nav-link"} onClick={() => handleButtonClick(1)}>
 DETAILS
</div>

<div className={showtext===2 ? "nav-link active":"nav-link"}  onClick={() => handleButtonClick(2)}>
MORE INFORMATION
</div>

<div className={showtext===3 ? "nav-link active":"nav-link"} onClick={() => handleButtonClick(3)}>
REVIEWS
</div>
</div>
<hr className="color-change"/>

<div className={showtext===1 ? "tab-pane fade show active":"tab-pane fade show"}>
<div className="section-text-one">
Created with premium quality material, Casual Shirts from Ideas Man are perfect for every occasion.
</div>

<ul>
<li>Cotton</li>
<br/>
<li>Slim Fit</li>
<br/>
<li>Model Specs: The model is 6’2 and is wearing size Medium</li>

</ul>

<div className="section-note">
Note: Actual product color might slightly vary from the image
</div>
</div>

<div className={showtext===2 ? "tab-pane  fade show active" : "tab-pane fade "}>
NEW ARRIVALS &nbsp; &nbsp; &nbsp;No
<br/><br/>
SHIRT FABRIC &nbsp; &nbsp; &nbsp;CVC
<br/><br/>
</div>

<div className={showtext===3 ? "tab-pane fade show  active" : "tab-pane fade "}>
It appears you have not purchased this product yet. We would love for you to try this product and give your valuable feedback.
<br/><br/>
</div>
</div>
    </>
    );
};
export default Section;
