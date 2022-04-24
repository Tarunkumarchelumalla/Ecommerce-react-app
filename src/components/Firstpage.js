import React from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import '../components/Firstpage.css';

import { FaLeaf } from 'react-icons/fa';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import{faTruck,faBackspace,faArrowAltCircleLeft,faLeaf}from'@fortawesome/free-solid-svg-icons'
 import Card from './card/card';
 import Style from './Styleflex/Style';
 import Footer from './Footer/footer';
 


export default function Firstpage() {
  return (<>
    <div className='container-fluid bg-1'>
      <div className='row Nav-bar'>
        <div className='col-sm-4 '>
         <ul>
         <li className='logo list'> <FaLeaf size='30px'/><span>green</span> <span className='imp'>Leaf</span></li>
         </ul>
        </div>
<div className='col-sm-4 navbar-items'>
         <ul className='nav-tags'>    
  <li> Home</li>
  <li> News</li>
  <li> Contact</li>
  <li> About</li>
</ul>
</div>
<div className=' col-sm-4 mgt' >
         <ul>
         <button className='Account-tag'> signup</button>
         <button className='Account-tag2 Account-tag'> Login</button>
         </ul>
         </div>
</div>
<div className='row container-fluid'>
  <div className=' col-sm-6 '>
  <br/><br/><br/><h2>Nursery That you can buy</h2><br/>
  <h3 className='logo'>Order now</h3>
  <p>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argumen</p>
     
      
      <ul>
         <button className='Account-tag'> shop indoor</button>
         <li className='button Account-tag2 nav-tags'> Explore about us</li>
         </ul>
  </div>
  <div className=' col-sm-6 bg-img'>
  <img width="80%" height="90%" src="https://i.ibb.co/mCHD1hv/plant.jpg" alt="plant" border="0" />
  </div>

</div>
      </div>
      <div className=' row container-fluid jumbo1' >
      <div className="col-sm-2">
      <FontAwesomeIcon   className="icon fa-3x"icon={faTruck} />
     
  </div>
  <div className="col-sm-2 text-adjust">
  <h5>Delivery faster</h5>
  <p>A paragraph is a series of related </p>
  </div>

     
  <div className="col-sm-2">
  <FontAwesomeIcon   className="icon fa-3x"icon={faBackspace} /> 

  </div>
  <div className="col-sm-2 text-adjust">
  <h5>Delivery faster</h5>
  <p>A paragraph is a series of related </p>
  </div>
  <div className="col-sm-2">
  <FontAwesomeIcon   className="icon fa-3x" icon={faArrowAltCircleLeft} /> 
 
  </div>
  <div className="col-sm-2 text-adjust">
  <h5>secured</h5>
  <p>A paragraph is a series of related </p>
  </div>
   </div>
   <div className='container-fluid '>
     <Card></Card>
   </div>
  <div>
    <Style></Style>
  </div>
   <div >
      <Footer></Footer>
   </div>
    </>
  )
}
