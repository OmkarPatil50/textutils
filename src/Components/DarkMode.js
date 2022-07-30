import React, { useState} from 'react'

export default function DarkMode() {

const [buttonTitle, setButtonTitle] = useState("Dark Mode")

const buttonHandler = ()=>{

if(buttonTitle==="Dark Mode"){
    setButtonTitle("Light Mode")
}else{
    setButtonTitle("Dark Mode")
}
   
}


  return (
    <div>
       <button type="button" class="btn btn-light" onClick={buttonHandler}>{buttonTitle}</button>
    </div>
  )
}
