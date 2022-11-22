import React,{useState} from "react";

export default function TextForm(props) {
    const [text,setText]= useState("Enter text here")
    const handleUpClick=()=>{
        console.log("handleUpClick is clicked"  + text)
        setText("text has been changed")
    }
    const handleOnClick=(event)=>{
        console.log("changed")
        setText(event.target.value)
    }
  return (
    <div>
        <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          onChange={handleOnClick}
          value={text}
          rows="14 "
        ></textarea>
      </div>
      <button onClick={handleUpClick} className="btn btn-primary">Convert to uppercase</button>
    </div>
  );
}
