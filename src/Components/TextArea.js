import React, { useState } from 'react';



export default function TextArea() {

    const [text, setText] = useState("");
    const[result,setResult] = useState('')

    const upperCaseHandler = () => {
        const upperCaseText = text.toUpperCase();
        setText(upperCaseText)
    }


    const lowerCaseHandler = () => {
        const lowerCaseText = text.toLowerCase()
        setText(lowerCaseText)
    }

    const onChangeHandler = (event) => {
        setText(event.target.value)
    }

const wordCountHandler=()=>{
    const wordsNumber = text.split(" ").length;
    if(text){
        setResult("Number of words: " + wordsNumber)

    }else{
        setResult("Number of words: 0")
    }
}

const characterCountHandler=()=>{
    const charactersNUmber= text.length;
    setResult("Number of Characters: "+ charactersNUmber)
}

const readingTimeHandler=()=>{
    const readingTime = (text.split(" ").length * 0.008);
    if(text){
        setResult("Reading Time Required is approximately " + readingTime + "min.")
      
    }else{
        setResult("Please enter text to analyse...!" )
    }
}


const clearTextHandler =()=>{
    setResult("")
    setText("")
}




    return (
        <>

            <div className='container my-3'>
                <div className="form-floating my-3">
                    <div className="mb-3">
                        <textarea className="form-control" required value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="12" placeholder='Enter Your Text Here'></textarea>
                    </div>

                </div>
            </div>



            <button type="button" className="btn btn-info mx-3" onClick={upperCaseHandler}>Convert to Uppercase</button>
            <button type="button" className="btn btn-outline-info mx-3" onClick={lowerCaseHandler}>Convert to Lowercase</button>
            <button type="button" className="btn btn-secondary mx-3" onClick={wordCountHandler}>Count Words</button>
            <button type="button" className="btn btn-warning mx-3" onClick={characterCountHandler}>Count Characters</button>
            <button type="button" className="btn btn-primary mx-3" onClick={readingTimeHandler}>Measure Reading Time</button>
            <button type="button" className="btn btn-danger mx-3" onClick={clearTextHandler}>Clear Text</button>



            <div className="container my-5">
                <h3>{result}</h3>
            </div>

<hr className='my-5 mx-3' />

            <div className="container my-3">
                <h2 className="my-4">Preview:</h2>
                <p>{text}</p>
            </div>
    
        </>
    )
}

