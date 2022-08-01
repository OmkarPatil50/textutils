import React, { useState } from 'react';



export default function TextArea(props) {

    const [text, setText] = useState("");
    const [result, setResult] = useState('')

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

    const wordCountHandler = () => {
        const wordsNumber = text.split(" ").length;
        if (text) {
            setResult("Number of words: " + wordsNumber)

        } else {
            setResult("Number of words: 0")
        }
    }

    const characterCountHandler = () => {
        const charactersNUmber = text.length;
        setResult("Number of Characters: " + charactersNUmber)
    }

    const readingTimeHandler = () => {
        const readingTime = (text.split(" ").length * 0.008);
        if (text) {
            setResult("Reading Time Required is approximately " + readingTime + "min.")

        } else {
            setResult("Please enter text to analyse...!")
        }
    }

    const copyTextHandler = () => {
        var copiedText = document.getElementById("exampleFormControlTextarea1")
        navigator.clipboard.writeText(copiedText.value)

    }

    const cutTextHandler = () => {
        let copiedText = document.getElementById("exampleFormControlTextarea1")
        navigator.clipboard.writeText(copiedText.value)
        setText("")
    }


    const removeExtraSpaceHandler = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))

    }


    const clearTextHandler = () => {
        setResult("")
        setText("")
    }
    



    return (
        <>
            <div className={`bg-${props.mode==="light"?"light":"dark"}`}>

                <div className='container '>
                    <div className="form-floating py-5">
                        <div className="mb-3">
                            <textarea className={`form-control bg-${props.mode==="light"?"light":"dark"} text-${props.mode==="dark"?"light":"dark"}`} required value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="12" placeholder='Enter Your Text Here'></textarea>
                        </div>

                    </div>
                </div>



                <button type="button" className="btn btn-info mx-3" onClick={upperCaseHandler}>Convert to Uppercase</button>
                <button type="button" className="btn btn-outline-info mx-3" onClick={lowerCaseHandler}>Convert to Lowercase</button>
                <button type="button" className="btn btn-secondary mx-3" onClick={wordCountHandler}>Count Words</button>
                <button type="button" className="btn btn-warning mx-3" onClick={characterCountHandler}>Count Characters</button>
                <button type="button" className="btn btn-primary mx-3" onClick={readingTimeHandler}>Measure Reading Time</button>
                <button type="button" className="btn btn-success mx-3" onClick={copyTextHandler}>Copy Text</button>
                <button type="button" className="btn btn-light mx-3" onClick={cutTextHandler}>Cut Text</button>
                <button type="button" className={`btn btn-${props.mode==="light"?"outline-dark":"outline-light"}`} onClick={removeExtraSpaceHandler}>Remove Extra Spaces</button>
                <button type="button" className="btn btn-danger mx-3" onClick={clearTextHandler}>Clear Text</button>



                <div className="container my-5">
                    <h3>{result}</h3>
                </div>

                <hr className='my-5 mx-3' />

                <div className="container my-3">
                    <h2 className={`text-${props.mode==="dark"?"light":"dark"} py-4`}>Preview:</h2>
                    <p className={`text-${props.mode==="dark"?"light":"dark"} pb-5 `}>{text.length>0?text:"Please Enter Your Text in Textbox to Get Preview"}</p>
                </div>

            </div>



        </>
    )
}

