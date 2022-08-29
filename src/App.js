import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import MyForm from './components/MyForm';
//import About from './components/About';
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";  */

function App() {
  
  return (
    <>
          <Navbar title="DevProject"/>
          <div className="container">
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
