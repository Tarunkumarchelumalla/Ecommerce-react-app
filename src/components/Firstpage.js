import React, { useEffect, useState } from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import '../components/Firstpage.css';
 import {useAuth} from "../components/contexts/AuthContext";
import { FaLeaf,FaUser } from 'react-icons/fa';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import{faTruck,faBackspace,faArrowAltCircleLeft,faLeaf}from'@fortawesome/free-solid-svg-icons'
 import Card from './card/card';
 import Style from './Styleflex/Style';
 import Footer from './Footer/footer';
 import {Link,useNavigate} from "react-router-dom";



export default function Firstpage() {
  const history=useNavigate();

  const {currentuser,database,ref,onValue,signout} = useAuth();
  // const[username,setUsername]=useState("");
  var data
  async function click(e){

       await signout();
      console.log('successfull logout');
      history('/Login') 
      console.log(currentuser.uid);
    
      
  }
  function click2(e){
    history('/Login1')
 }

//  console.log(currentuser.uid)

//  database.database().ref(currentuser.uid).limitToLast(1).once('value')
//  .then(function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//           console.log(childSnapshot.val());
//           console.log(childSnapshot.val().text);
//           var b =childSnapshot.val().text;
//         });
//       });
// var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
// starCountRef.on('value', (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });
// console.log(currentuser.uid) 
try{
const starCountRef = ref(database, currentuser.uid);
onValue(starCountRef, (snapshot) => {
   data = snapshot.val();
  console.log(data.email)
  console.log(data.username)
  // updateStarCount(postElement, data);
 
});
} catch{
   history('/Login')
}
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
<ul className='Accounthandle2'>
         <li  className='Account-tag'><FaUser size='30px'/>{data.username}</li>
         
         {/* <li className='logo list'> <FaUserAlt size='20px'/></li> */}
         </ul>
         <ul className='Accounthandle'>
         <button onClick={click} className='Account-tag'> signup</button>
         <button onClick={click2}className='Account-tag2 Account-tag'> Login</button>
         {/* <li className='logo list'> <FaUserAlt size='20px'/></li> */}
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
