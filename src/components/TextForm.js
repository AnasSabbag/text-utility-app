import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('');
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleClearClick=()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Clear all text","success")
    }
    const handleCopyText=()=>{
        
        navigator.clipboard.writeText(text);
        props.showAlert("Copy text","success")
    }
    const handleExtraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Handled Extra space","success")

    }

    const handleMergeLineClick=()=>{

        let newText =text.replace('\n',' ');
        setText(newText);   
        props.showAlert("Merged Line","success")
    }
    const handleOnChange=(events)=>{
        setText(events.target.value);
    }
   

    return (  
    <>
        <div className="container" style ={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743' }} id="myBox" rows="5"></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleLowClick} >Convert to lowercase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>   
            <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleMergeLineClick}>merge Line </button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-2" onClick={handleExtraSpace}>Handle Extra Space</button>
        </div>
        <div className="container my-3" style ={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>your text summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes time to read</p>    
            <h3>preview</h3>
            <p>{text.length >0 ?text:"enter something to preview here"}</p>
        </div>
     </>
 
  )
}   
