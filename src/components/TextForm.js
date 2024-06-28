import React,{useState} from 'react'


export default function TextForm(props){

    const handleUpClick = () => {
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase..", "success");
    }  
    
    const handleLoClick = () => {
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case..", "success");
    }   

    const handleClearClick=() => {
        setText("");
        props.showAlert("Clear all text from textbox..", "success");
    } 

    const handleTextClick=()=>{
        let newText= text.slice(0,text.length-1);
        setText(newText);
        props.showAlert("Backspace applied", "success");
    }

    const handleCopy=()=>{
        let text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy text in the clipboard..", "success");
    }

    const handleSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra spaces..", "success");
    }

    const handleOnChange=(event) =>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    

    return(
        <>
        <div>
            <div  className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>{props.heading}</h2>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="9"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to UpperCase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to LowerCase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick} >Clear</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleTextClick} >Backspace</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpace} >Remove Extra Space</button>
        </div>
        <div style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text: "Enter something in textbox to preview... "}</p>
        </div>
        </>
    )
}