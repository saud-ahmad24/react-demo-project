import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from './components/About';
import NavBar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }

  const toggleMode = ()=>{
    if(mode==="dark"){
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success")
    }else{
      setMode('dark')
      document.body.style.backgroundColor='#080620';
      showAlert("Dark mode is enabled","success")
      setInterval(() => {
        document.title="Hi"
      }, 2000);
      setInterval(() => {
        document.title="Hello"
      }, 1500);
    }
  }
  return (
    <>
    <Router>
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      <Routes>
           <Route exact path="/" element={<TextForm/>} showAlert={showAlert} heading="sdfdfzd" toggleMode={toggleMode}/>
        </Routes>
        <Routes>
           <Route exact path="/about" element={<About/>} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
