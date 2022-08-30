import React, { useState } from "react"
//STATE
export default function TextForm(props){
    const handleUpClick=()=>{
        // console.log("Uppper-Case was click"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper-Case","success");
    }
    const handleLoClick=()=>{
        // console.log("Uppper-Case was click"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower-Case","success");
    }
    const handleClearClick=()=>{
        // console.log("Uppper-Case was click"+text);
        let newText ='';
        setText(newText);
        props.showAlert("Text has been cleared","success");
    }
    const handleNumberClick=()=>{
        let newText=text.replace(/[0-9]/g,' ');
        setText(newText);
        props.showAlert("The numbers has been removed from text","success");
    }
    const handleCopy=()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is Copied to Clipboard","success");
        
    }
    const handleExtraSpaces= () =>{
        let newText=text.split(/[ ] +/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been Removed","success");
    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const[text,setText] = useState('');
    // text="new text"; // Wrong way
    // setText=("new Text");//Right way
    return(
    <div className="container" style={{color:props.mode ==='dark'?'white':'#042743' }} > 
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{ backgroundColor:props.mode ==='dark'?'grey':'white', color:props.mode ==='dark'?'white':'#042743' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      <br></br> 
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper-Case</button>
       <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower-Case</button>
       <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
       <button className="btn btn-primary mx-2" onClick={handleNumberClick}>Remove Numbers from Text</button>
       <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
       <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
       
    </div>
    <div className="container" style={{color:props.mode ==='dark'?'white':'#042743'}}>
        <h1> Your Text Summary</h1>
        <p> {text.split (" ").length} words and {text.length} characters</p>
        <p> {0.008* text.split(" ").length} Minutes Read</p>
        <h2> Preview </h2>
        <p> {text}</p>
    </div>
    </div>
    )
} 