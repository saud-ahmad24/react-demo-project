import './App.css';
import NavBar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
    <NavBar  title="TextUtils"/>
    <div className="container">
    <TextForm heading="Enter the text to analyze"/>

    </div>
    </>
  );
}

export default App;
