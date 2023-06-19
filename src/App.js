import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import React, { useState } from 'react';

function App() {

  const[mode,setMode]=useState('light');
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#130F25';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    } 
  }
  return (
    <>
      <Navbar title="Ishika's Portfolio" mode={mode} toggleMode={toggleMode} />
      <Home mode={mode}/>
      <br /><br />
      <Work />
      <br /><br />
      <Skills />
      <Footer mode={mode}/>
    </>
  );
}

export default App;