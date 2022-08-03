
import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert.js';
import Header from './Components/Header';
import TextArea from './Components/TextArea';
import About from './Components/About.js'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"; 


function App() {

  const [mode, setMode] = useState("light")
const [alertMessage,setAlertMessage] =useState(null)




const alertHandler =(message,alertType)=>{

    setAlertMessage({
      msg: message,
      type:alertType
  })
  setTimeout(()=>{
    setAlertMessage(null)
  },1500)

}



  const modeHandler = () => {
    if (mode === "light") {
      setMode("dark")
      alertHandler("Dark Mode Enabled Successfully","success")
  
    } else {
      setMode("light")
      alertHandler("Light Mode Enabled Successfully","success")
    }
  }





  return (

  <Router>

  
      <Header title="TextUtils" mode={mode} modeHandler={modeHandler} alertHandler={alertHandler} />
      <Alert alertMessage={alertMessage}/>
      
 



        
      <Routes>

      <Route path="/" element={<TextArea mode={mode} alertHandler={alertHandler} />}/>
        <Route index element={<TextArea mode={mode} alertHandler={alertHandler} />} />
        <Route path="/about" element={<About />}/>
     
       
        </Routes>



    </Router>
  );
}

export default App;
