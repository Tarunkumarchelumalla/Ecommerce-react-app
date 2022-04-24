import React from 'react'
import '../Styleflex/Style.css';
export default function Style() {
  return (<>
  
      <div className='container-fluid row style-container '>
     
          <div className='col-sm-6 marg'>
           <h1> The Best Plant</h1>
                <h1> Under the One</h1>
                <h1> roof</h1>
                
                <p>A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. Paragraphs add one idea at a time to your broader argumen</p><br></br>
               <center><button className='tag'><h5>Get started </h5></button></center>
          </div>
          <div className='col-sm-6'>
             <img className="marg"width="80%"height="90%"src='https://i0.wp.com/www.halaplants.ae/wp-content/uploads/2021/09/alocasia-macrorrhiza-stingray.jpg?fit=800%2C800&ssl=1'/>
          </div>
      </div>
  
    </>
  )
}
