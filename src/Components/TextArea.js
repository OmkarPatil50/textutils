import React, { useState } from 'react';



export default function TextArea() {

    const [text, setText] = useState("")

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






    return (
        <>

            <div className='container my-3'>
                <div className="form-floating my-3">
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="12" placeholder='Enter Your Text Here'></textarea>
                    </div>
                    <button type="button" className="btn btn-info mx-3" onClick={upperCaseHandler}>Convert to Uppercase</button>
                    <button type="button" className="btn btn-outline-info mx-3" onClick={lowerCaseHandler}>Convert to Lowercase</button>

                </div>
            </div>

            <div className="container my-3">
                <h2 className="my-3" >Your Text Summary</h2>
                <p className="my-2">Your Text has {text.split(" ").length} words and {text.length} characters.</p>
                <p className="my-2">Read Time: {(text.split(" ").length*0.008)} min</p>
            </div>
            <div className="container my-3">
                <h2 className="my-2">Preview:</h2>
                <p>{text}</p>
</div>
            
        </>
    )
}
