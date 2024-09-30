// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import {useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{

    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }
  const toggleMode = (cls)=>{
     
    removeBodyClasses()
    console.log(cls) 
    document.body.classList.add('bg-'+cls)
      if(mode==='light'){
        setmode('dark')
        document.body.style.backgroundColor='#042743'
        showAlert("Dark mode hjas been enabled","success")

      }else{
        setmode('light')
        document.body.style.backgroundColor='white'
        showAlert("light mode has been enabled ","success")
      }
  }
  
  return (
    <>
    <Router>
    <Navbar title = "TextUtil2" mode ={mode} aboutText={"About"} toggleMode ={toggleMode}/>
    <Alert alert = {alert} />
    <div className="container my-3">
        <Routes>
          <Route exact  path="/about" element ={<About mode ={mode} />} />
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading = "Enter The Text to analyze" mode ={mode} />} />  
        </Routes>

    </div>
    </Router>
    </>
  );
} 

export default App;
