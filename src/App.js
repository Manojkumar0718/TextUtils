import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import Contact from './Components/Contact';
import Alert from './Components/Alert';


function App() {

  const [Switch, setSwitch] = useState(false)
  const [mode , setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{
      setAlert({
        message : message,
        type : type
      })
      setTimeout(() =>{
        setAlert(null)
      },3000)
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      document.body.style.color = 'white'
      showAlert("Dark mode is enabled" , "success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode is enabled" , "success")

    }
  }

  return (
    <div >
      <Navbar Switch={Switch} setSwitch={setSwitch} toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <div className='container' >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TextForm />} mode={mode} />
            <Route path='/about' element={<About Switch={Switch} />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
