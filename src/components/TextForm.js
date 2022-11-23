import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    console.log("handleUpClick is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("handleUpClick is clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleOnClick = (event) => {
    console.log("changed");
    setText(event.target.value);
  };
  const handleClearClick = () => {
    console.log("handleUpClick is clicked" + text);
    let newText = '';
    setText(newText);
  };
  
  return (
    <>
    <div className="container">
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} id="myBox" onChange={handleOnClick}   rows="14" ></textarea>      </div>
      <button onClick={handleUpClick} className="btn btn-primary mx-1">
        Convert to uppercase
      </button>
      <button onClick={handleLoClick} className="btn btn-primary mx-1">
        Convert to lowercase
      </button>
      <button onClick={handleClearClick} className="btn btn-primary mx-1">
        Clear Text
      </button>

    </div>
    <div className="container my-3">
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} chars</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div> 
  </>
  );
}
