import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  const [mode, setMode]=useState('light'); //enable dark mode or light mode
  const [alert, setAlert] =useState(null); //set Alert function

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=> {
      setAlert(null);
    },1500);
  }

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled", "success");
    }
  }

  const router = createBrowserRouter([
     {
       path: "/",
       element: <><Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/><div className='container my-3'><Alert alert={alert}/><TextForm showAlert={showAlert} heading="Enter the text to analyse: " mode={mode}/></div></>
     },
     {
       path: "/about",
       element:<><Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/><div className='container my-3'><Alert alert={alert}/><About aboutText="about"/> </div></>
     },
   ])

  return (
  //   <>
  //  <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
  //  <Alert alert={alert}/>

  //  <div className='container my-3'>
  //  <TextForm showAlert={showAlert} heading="Enter the text to analyse: " mode={mode}/>
  //  {/* <About aboutText="about"/> */}
  //  </div>

  //  </>
  <div>
  <RouterProvider router = {router}/>
  </div>
  

  );
}

export default App;
