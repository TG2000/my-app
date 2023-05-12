import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#4b6a85";
      showAlert(" dark Mode enabled", "success")
      document.title = "TextUtils-Dark Mode";
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert(" light Mode enabled", "success")
      document.title = "TextUtils-Light mode";
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (

    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        {/* <div className="container"> */}
          <Switch>
            <Route path="/about"> 
              <About />
            </Route>
            <Route path="/">
              <Textform heading={"Enter the Text"} showAlert={showAlert} mode={mode}></Textform>
            </Route>
          </Switch>

          {/* <About></About> */}
        {/* </div> */}
      </Router>

    </>
  );
}




export default App;
