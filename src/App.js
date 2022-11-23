import './App.css';
// import About from './components/About';
import NavBar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'


function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode==="dark"){
      setMode('light')
      document.body.style.backgroundColor='white';
    }else{
      setMode('dark')
      document.body.style.backgroundColor='grey';
    }
  }
  return (
    <>
    <NavBar  title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container" >
    <TextForm heading="Enter the text to analyze"  mode={mode}/>
    {/* <About/> */}

    </div>
    </>
  );
}

export default App;
