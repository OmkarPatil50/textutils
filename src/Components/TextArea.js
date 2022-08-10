import React, { useState } from 'react';



export default function TextArea(props) {

    const [text, setText] = useState("");

    const upperCaseHandler = () => {

        const upperCaseText = text.toUpperCase();
        setText(upperCaseText)
        props.alertHandler("Converted to Upper-Case Successfully!", "success")


    }


    const lowerCaseHandler = () => {

        const lowerCaseText = text.toLowerCase()
        setText(lowerCaseText)
        props.alertHandler("Converted to Lower-Case Successfully!", "success")


    }

    const onChangeHandler = (event) => {
        setText(event.target.value)
    }






    const copyTextHandler = () => {

        navigator.clipboard.writeText(text)
        props.alertHandler("Text Copied Successfully!", "success")




    }

    const cutTextHandler = () => {

        navigator.clipboard.writeText(text)
        props.alertHandler("Text cut Successful!", "success")
        setText("")



    }


    const removeExtraSpaceHandler = () => {


        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.alertHandler("Extra Spaces Removed Successfully!", "success")






    }


    const clearTextHandler = () => {

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

                            <button disabled={text.split("").filter((element) => {
                                return element !== " "
                            }).length === 0} type="button" className="btn btn-info mx-3 my-3" onClick={upperCaseHandler}>Convert to Uppercase</button>
                            <button disabled={text.split("").filter((element) => {
                                return element !== " "
                            }).length === 0} type="button" className="btn btn-outline-info mx-3 my-3" onClick={lowerCaseHandler}>Convert to Lowercase</button>
                            <button disabled={text.split("").filter((element) => {
                                return element !== " "
                            }).length === 0} type="button" className="btn btn-success mx-3 my-3" onClick={copyTextHandler}>Copy Text</button>
                            <button disabled={text.split("").filter((element) => {
                                return element !== " "
                            }).length === 0} type="button" className="btn btn-light mx-3 my-3" onClick={cutTextHandler}>Cut Text</button>
                            <button disabled={text.split("").filter((element) => {
                                return element !== " "
                            }).length === 0} type="button" className={`btn btn-${props.mode === "light" ? "outline-dark" : "outline-light"}`} onClick={removeExtraSpaceHandler}>Remove Extra Spaces</button>
                            <button disabled={text.split("").filter((element) => {
                                return element !== " "
                            }).length === 0} type="button" className="btn btn-danger mx-3 my-3" onClick={clearTextHandler}>Clear Text</button>
                        </div>

                    </div>
                </div>





                <div className="container">
                    <h3 className={`text-${props.mode === "dark" ? "light" : "dark"} py-2`}>Text Summary</h3>
                    <p>{text.split(/\s+/).filter((element) => {
                        return element.length !== 0
                    }).length} Words and {text.split('').filter((word) => {
                        return word !== " "
                    }).length} Charaters</p>
                    <p>Reading Time: {(text.split(" ").filter((element) => {
                        return element.length !== 0
                    }).length * 0.008)} Minutes </p>
                </div>

                <hr className='my-4 mx-3' />

                <div className="container my-2">
                    <h2 className={`text-${props.mode === "dark" ? "light" : "dark"} `}>Preview:</h2>
                    <p className={`text-${props.mode === "dark" ? "light" : "dark"} pb-5 `}>{text.length > 0 ? text : "Please Enter Your Text in Textbox to Get Preview"}</p>
                </div>

            </div>



        </>
    )
}

