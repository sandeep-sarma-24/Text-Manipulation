import React, {useState} from "react";


export default function TextForm(props){
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toLocaleUpperCase();
        setText(newText)
    }

    const clear = ()=>{
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text here');

    return(
        <>
        <div className="container">
            <h1>Uppercase Convertor</h1>
        </div>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea name="form" id="myBox" className="form-control" cols="30" rows="10" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={clear}>Clear Text</button>
        </div>

        <div className="container my-3">
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} characters</p>
                <p>{(0.008 * text.split(" ").length)/60} minutes  to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
        </div>
        </>
    )
}


