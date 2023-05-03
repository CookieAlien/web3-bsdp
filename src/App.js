import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Title from './components/title';
import Home from './components/home';
import About from './components/about';
import Channels from './components/channels';
import Dashboard from './components/dashboard';
import Login from './components/login';
import Sidebarmenu from './components/Sidebarmenu';

function App() {
  return (
    <div className="App" id='outer-container'>
      
      <Router basename='/'>
        <Sidebarmenu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
        <div id="page-wrap">
        <Title />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Channels" element={<Channels />}/>
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/Login" element={<Login />}/>
        </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
