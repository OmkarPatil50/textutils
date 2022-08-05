import React, { useState } from 'react';



export default function TextArea(props) {

    const [text, setText] = useState("");
    const [result, setResult] = useState('')

    const upperCaseHandler = () => {
        if (text) {
            const upperCaseText = text.toUpperCase();
            setText(upperCaseText)
            props.alertHandler("Converted to Upper-Case Successfully!", "success")
        } else {
            props.alertHandler("Please Enter Text in Textbox", "danger")

        }

    }


    const lowerCaseHandler = () => {
        if (text) {
            const lowerCaseText = text.toLowerCase()
            setText(lowerCaseText)
            props.alertHandler("Converted to Lower-Case Successfully!", "success")
        } else {
            props.alertHandler("Please Enter Text in Textbox", "danger")
        }

    }

    const onChangeHandler = (event) => {
        setText(event.target.value)
    }

    const wordCountHandler = () => {
        if (text) {
            const wordsNumber = text.split(" ").filter((element)=>{
return element.length!==0
            }).length;
                setResult("Number of words: " + wordsNumber)
                props.alertHandler("Number of Words Counted Successfully!", "success")
        } else {
            setResult(null)
            props.alertHandler("Please Enter Text in Textbox", "danger")

        }


    }

    const characterCountHandler = () => {

        if (text) {
            const charactersNUmber = text.split('').filter((word)=>{
                return word!==" "
            }).length;
            setResult("Number of Characters: " + charactersNUmber)
            props.alertHandler("Number of Characters Counted Successfully!", "success")
        } else {
            props.alertHandler("Please Enter Text in Textbox", "danger")

        }



    }

    const readingTimeHandler = () => {

        if (text) {

            const readingTime = (text.split(" ").filter((element)=>{
                return element.length!==0
                            }).length * 0.008);
   
                setResult("Reading Time Required is approximately " + readingTime + "min.")
                props.alertHandler("Reading Time Measured Successfully!", "success")

         

        } else {
            props.alertHandler("Please Enter Text in Textbox", "danger")
            setResult(null)
        }




    }

    const copyTextHandler = () => {

        if (text) {
            var copiedText = document.getElementById("exampleFormControlTextarea1")
            navigator.clipboard.writeText(copiedText.value)
            props.alertHandler("Text Copied Successfully!", "success")
        } else {
            props.alertHandler("Please Enter Text in Textbox", "danger")

        }



    }

    const cutTextHandler = () => {
        if (text) {

            let copiedText = document.getElementById("exampleFormControlTextarea1")
            navigator.clipboard.writeText(copiedText.value)
            props.alertHandler("Text cut Successful!", "success")
            setText("")
        } else {
            props.alertHandler("Please Enter Text in Textbox", "danger")

        }


    }


    const removeExtraSpaceHandler = () => {

        if (text) {
            let newText = text.split(/[ ]+/)
            setText(newText.join(" "))
            props.alertHandler("Extra Spaces Removed Successfully!", "success")

        } else {
            props.alertHandler("Please Enter Text in Textbox", "danger")

        }




    }


    const clearTextHandler = () => {
        setResult("")
        setText("")
        props.alertHandler("Text Cleared Successfully!", "success")
    }




    return (
        <>
            <div style={{ backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "dark" ? "white" : "black" }}>

                <div className='container '>
                    <div className="form-floating py-5">
                        <div className="mb-3">
                            <textarea className={`form-control bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "dark" ? "light" : "dark"}`} required value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="12" placeholder='Enter Your Text Here'></textarea>
                        </div>

                    </div>
                </div>



                <button type="button" className="btn btn-info mx-3 my-3" onClick={upperCaseHandler}>Convert to Uppercase</button>
                <button type="button" className="btn btn-outline-info mx-3 my-3" onClick={lowerCaseHandler}>Convert to Lowercase</button>
                <button type="button" className="btn btn-secondary mx-3 my-3" onClick={wordCountHandler}>Count Words</button>
                <button type="button" className="btn btn-warning mx-3 my-3" onClick={characterCountHandler}>Count Characters</button>
                <button type="button" className="btn btn-primary mx-3 my-3" onClick={readingTimeHandler}>Measure Reading Time</button>
                <button type="button" className="btn btn-success mx-3 my-3" onClick={copyTextHandler}>Copy Text</button>
                <button type="button" className="btn btn-light mx-3 my-3" onClick={cutTextHandler}>Cut Text</button>
                <button type="button" className={`btn btn-${props.mode === "light" ? "outline-dark" : "outline-light"}`} onClick={removeExtraSpaceHandler}>Remove Extra Spaces</button>
                <button type="button" className="btn btn-danger mx-3 my-3" onClick={clearTextHandler}>Clear Text</button>


                <div className="container my-5">
                    <h3 className={`text-${props.mode === "dark" ? "light" : "dark"} py-4`}>{result}</h3>
                </div>

                <hr className='my-5 mx-3' />

                <div className="container my-3">
                    <h2 className={`text-${props.mode === "dark" ? "light" : "dark"} py-4`}>Preview:</h2>
                    <p className={`text-${props.mode === "dark" ? "light" : "dark"} pb-5 `}>{text.length > 0 ? text : "Please Enter Your Text in Textbox to Get Preview"}</p>
                </div>

            </div>



        </>
    )
}

