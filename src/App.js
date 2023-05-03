import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Home from './components/home';
import About from './components/about';
import Channels from './components/channels';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Navbarmenu from './components/Navbarmenu';
function App() {
  return (
    <div className="App">
      <Router basename='/'>
        <Navbarmenu />
        <Routes>
        <Route exact path="/" component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Online" component={Channels}/>
          <Route path="/Offline" component={Dashboard}/>
          <Route path="/Contact" component={Login}/>
        </Routes>


      </Router>
      
    </div>
  );
}

export default App;
