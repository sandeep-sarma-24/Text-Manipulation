import React, {useState} from "react";


export default function TextForm2(props){
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text1);
        let newText0 = text1.toLocaleLowerCase();
        setText(newText0)
    }

    const clear = ()=>{
        let newText0 = '';
        setText(newText0)
    }

    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }

    const [text1, setText] = useState('Enter text here');

    return(
        <>
        <div className="container">
            <h1>Lowercase Convertor</h1>
        </div>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea name="form2" id="myBox2" className="form-control" cols="30" rows="10" value={text1} onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={clear}>Clear Text</button>
        </div>

        <div className="container my-3">
                <h1>Your text Summary</h1>
                <p>{text1.split(" ").length - 1} words and {text1.length} characters</p>
                <p>{(0.008 * text1.split(" ").length)/60} minutes  to read</p>
                <h2>Preview</h2>
                <p>{text1}</p>
        </div>
        </>
    )
}


