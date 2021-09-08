// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'
import Alert from './Components/Alert';

function App() {

  const [mode,setMode] = useState("light");
  const [alert,setalert] =useState(null)

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
  setTimeout(()=>{
    setalert(null)
  },1500)
  }
  const togglemode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor="#042743"
      showalert("DarkMode has been enabled","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor="white"
      showalert("LightMode has been enabled","success")
    }
  }
  return (

    <>
   <Navbar title ="TextUtils"  mode={mode} toggelemode={togglemode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Textform showalert={showalert} heading="Try TextUtils- Word Counter,Charcter Counter,Remove Extra Spaces" mode={mode}/>
   </div>
  
    </>
    
  );
}

export default App;
