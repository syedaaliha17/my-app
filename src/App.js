import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{ useState } from 'react';
import Alert from './components/Alert';


// import{Routes,Route} from 'react-router-dom';
function App() {
  
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }

  const [alert,setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    </div>  
    <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />
    </>
  );
}
// {/*     
//         <Routes>
//           <Route path="/about" element={ <About mode={mode} />}/>
//           <Route path="/" element={ }/>
//         </Routes> */}



export default App;