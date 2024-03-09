import React, { useState } from 'react';
import './About.css';
export default function TextForm(props) {
    const [text, setText] = useState("Enter Your Text");

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to UpperCase", "success")
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to LowerCase", "success")
    }

    const handleCopyText = () => {
        // var textArea = document.getElementById("mybox");
        // textArea.select();
        // document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces have been removed", "success")
    }

    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text has been cleared", "success")
    }

    const handleTitleCase = () => {
        let words = text.split(" ");
        let newText = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        setText(newText.join(" "));
        props.showAlert("Text converted to TitleCase", "success")
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <div className="d-flex flex-column" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2><label htmlFor="mybox" className="form-label mb-2 my-2">{props.title}</label></h2>
                <textarea className="form-control flex-grow-1" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="mybox" rows="8"></textarea>
                <div className="button-container">
                    <button disabled={text.length===0} type="button" className="btn btn-info" onClick={handleUpperCase}>Convert To UpperCase</button>
                    <button disabled={text.length===0} type="button" className="btn btn-info" onClick={handleTitleCase}>Convert To TitleCase</button>
                    <button disabled={text.length===0} type="button" className="btn btn-info" onClick={handleLowerCase}>Convert To LowerCase</button>
                    <button disabled={text.length===0} type="button" className="btn btn-info" onClick={handleClearText}>Clear Text</button>
                    <button disabled={text.length===0} type="button" className="btn btn-info" onClick={handleCopyText}>Copy Text</button>
                    <button disabled={text.length===0} type="button" className="btn btn-info" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
                </div>
            </div>

            <div className="container mt-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words   and  {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Enter the text that you want to preview'}</p>
            </div>
        </div>
    );
}
