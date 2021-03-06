import React,{useState} from 'react'

export default function TextForm(props){
    const handleUpClick =()=>{
       // console.log("UpperCase was clicked " + text); 
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case", "success");
    }
    const handleLoClick =()=>{
        // console.log("UpperCase was clicked " + text); 
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to Lower Case", "success");
     }
    const handleClearClick =()=>{
        // console.log("UpperCase was clicked " + text); 
         let newText =''
         setText(newText)
         props.showAlert("Text Cleared", "success");
     }
    const handleOnChange =(event)=>{
       // console.log("On Change");
        setText(event.target.value)
    }

    const handlecopy = ()=> {
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }

    const handleExtraSpace =()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Removed", "success");
    }

    const [text,setText] = useState(' ');

    return ( 
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" />
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convet to Uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convet to Lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
                <button className='btn btn-primary mx-1' onClick={handlecopy}>Copy text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpace}>Remove Extra Space</button>
                
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h2>Your text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} character </p>
                <p>{0.008 * text.split(" ").length}</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter Something in the textbox to preview it here"}</p>
            </div>
        </>
    )
}