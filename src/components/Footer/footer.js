
import React from 'react';
import '../Footer/footer.css';
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedinIn,FaFacebookSquare,FaBehance,FaLeaf } from 'react-icons/fa';
export default function Footer() {
  return (
    <><div className='container-fluid'>
    <div className='row conatiner bd-footer'>
        <div className='col-sm-4 marg'>
                <center><h5 className='logo'> <ul>
         <li className='foot-logo list'> <FaLeaf size='30px'/><span>green</span> <span className='foot-imp'>Leaf</span></li>
         </ul></h5></center>
         <p>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argumen</p>
         <center>< FaFacebook  className='hover' size="30px"/>    <FaInstagram  className='hover'   size="30px"/>   <FaTwitter   size="30px"/>   <FaLinkedinIn   className='hover'  size="30px"/>   <FaBehance   className='hover'  size="30px"/></center>
        </div> 
        <div className='col-sm-2 marg'>
         <center><h5>PRODUCTS</h5>
           <ul className='list'>
             <li>
               Agular
             </li>
             <li>
               React
             </li>
             <li>
               bulg
             </li>
             <li>
               vue
             </li>
           </ul>

         </center>
        </div>
        <div className='col-sm-2 marg'>
        <center><h5>Usefull link</h5>
        <ul className='list'>
             <li>
               Agular
             </li>
             <li>
               React
             </li>
             <li>
               bulg
             </li>
             <li>
               vue
             </li>
           </ul>
        </center>

</div>
<div className='col-sm-2 marg'>
<center><h5>Contacts</h5>
<ul className='list'>
             <li>
               Agular
             </li>
             <li>
               React
             </li>
             <li>
               bulg
             </li>
             <li>
               vue
             </li>
           </ul>

</center>

</div>
<div>
        <hr></hr>
     
    </div>

    </div>
  
    </div>
    </>
  )
}
