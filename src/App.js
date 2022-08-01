
import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import TextArea from './Components/TextArea';


function App() {

  const [mode, setMode] = useState("light")



  const modeHandler = () => {
    if (mode === "light") {
      setMode("dark")
  
    } else {
      setMode("light")
     
    }
  }





  return (
    <div className="App">
      <Header title="TextUtils" mode={mode} modeHandler={modeHandler} />
      <TextArea mode={mode} />
    </div>
  );
}

export default App;
