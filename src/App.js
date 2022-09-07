import './App.css';
import React from 'react';
//import Navbar from './components/Navbar';
import MyForm from './components/MyForm';
//import About from './components/About';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";  */

const mystyle=
{
  backgroundColor:"black",
  color:"white",
  textAlign:"center",
  padding:"20px",
  fontFamily:"cursive"
};

function App() {
  
  return (
    <>
          <h1 style={mystyle}>Dev Text-Edit Project </h1>
          <div className="container">
            <br/>
          <MyForm heading="Enter Text to do Different Operations"/>
          </div>
          
          
   { /* <Router>
      <div className="container">
    <Navbar title="DevProject"/>
    <Switch>
      <Route path="/about">
          <About/>
      </Route>
      <Route path="/">
          <MyForm heading="Enter Text to do Different Operations"/>
      </Route>
    </Switch>
    </div>
    </Router>
  */ }   
    </>
    );
}

export default App;
