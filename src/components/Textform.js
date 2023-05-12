
import React, {useState}from 'react'


export default function Textform(props) {
    
    const [text,setText]=useState("")

    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase","success");
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("LowerCase","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
  <div className="mb-3">
    {/* <label htmlFor="myBox" class="form-label">Textarea</label> */}
    
    <textarea className="form-control" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===
    'dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} ></textarea>
  </div>
  <button className="btn btn-primary mx-4" onClick={handleUpClick}>UpperCase</button>
  <button className="btn btn-primary" onClick={handleLoClick}>LowerCase</button>
  {/* <button className="btn btn-primary" onClick={handleClick}>UpperCase</button> */}
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Summary</h1>
    <p>{text.split(" ").length} words and {text.length}characters</p>
  </div>
  </>
  )
}
