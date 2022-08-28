import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import MyForm from './components/MyForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <>
    <Router>
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
    </>
    );
}

export default App;
