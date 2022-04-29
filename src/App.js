
import React from 'react';
import Login from './components/Login';
import Login1 from './components/login1';
import "../src/App.css";
import {AuthProvider} from "./components/contexts/AuthContext";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Firstpage from './components/Firstpage';

function App() {

  return (
    <>
    <Router>
    <AuthProvider>
     <Routes>
       <Route exact path="/" element={<Firstpage/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/login1" element={<Login1/>}/>

  
     </Routes>

      </AuthProvider>
      </Router>
      </>
  );
}



export default App;
