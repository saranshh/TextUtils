import React, {useState} from "react";
import "./TextForm.css";

export default function TextForm(props) {
    const handleUpClick = () => {
      //  console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () => {
        //  console.log("Uppercase was clicked" + text);
          let newText = text.toLowerCase();
          setText(newText);
          props.showAlert("Converted to lowercase!", "success")

      }
    
    const handleClearClick = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Text cleared!", "success")

    }

    const handleOnChange = (event) => {
      //  console.log("On change");
        setText(event.target.value)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text); 
        document.getSelection().removeAllRanges();  
        props.showAlert("Copied to Clipboard!", "success");
    }

    const [text, setText] = useState("");

  return (
    <div>
      <div className="form-group" style={{backgroundColor: props.mode===`dark`?`#042743`:`white`,  color: props.mode===`dark`?`white`:`black`}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`#13466e`:`white`, 
        color: props.mode===`dark`?`white`:`black`}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button> 
        <button disabled={text.length===0} className="btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button> 
        <button disabled={text.length===0} className="btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button> 
        <button disabled={text.length===0} className="btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button> 

      </div>
      <div className="form-group" style={{backgroundColor: props.mode===`dark`?`#042743`:`white`, color: props.mode===`dark`?`white`:`black`}}>
          <h2>Tour text summary</h2>
          <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.08 * text.split(" ").filter((element) => {return element.length!==0}).length} minutes read</p>
          <h2>Preview</h2> 
          <p>{text.length>0?text:"Enter the text to preview it here"}</p>
      </div>
    </div>
  );
}
