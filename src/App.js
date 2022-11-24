import './App.css';
// import About from './components/About';
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
    }
  }
  return (
    <>
    <NavBar  title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container" >
    <TextForm heading="TextUtils"  mode={mode}/>
    {/* <About/> */}

    </div>
    </>
  );
}

export default App;
