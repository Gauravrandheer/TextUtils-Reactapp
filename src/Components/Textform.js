import React,{useState} from 'react'



export default function Textform(props) {

    const handleUpclick =()=>{
      let newText = text.toUpperCase()
      setText(newText)
      props.showalert("Converted to UpperCase","success")
    }

    const  handledownclick = ()=>{
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showalert("Converted to LowerCase","success")
    }

    const handleClearclick = ()=>{
        let clr = ""
        setText(clr)
        props.showalert("Clear text","success")
    }

    const handleTrimclick=()=>{
        let tr = text.split(/[ ]+/)
        setText(tr.join(" "))
        props.showalert("Remove The Extra Spaces","success")
    }

    const handleCopyclick=()=>{
        var copyText = document.getElementById('mybox')
        copyText.select();
        document.execCommand('copy')
        document.getSelection().removeAllRanges()
        props.showalert("Copy to Clipboard","success")
    }

    
    const handleCutclick=()=>{
        var copyText = document.getElementById('mybox')
        copyText.select();
        document.execCommand('cut')
        props.showalert("Cut the text","success")
    }

    const handleOnchange =(event)=>{
        setText(event.target.value)

    }

    const [text,setText]= useState("")
    return (
         <>
        
         
        <div className="container" style={{color:props.mode==='light'?'#042743':'white'}}>
            <h2 className="mb-4">{props.heading}</h2>
             <div className="mb-3">
               <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='light'?'#042743':'white'}} id="mybox" rows="8"></textarea>
            </div>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert into UpperCase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handledownclick}>Convert into LowerrCase</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearclick}>Clear the text</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTrimclick}>Remove the extra spaces</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyclick}>Copy</button>
            <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCutclick}>Cut</button>
        </div>
        <div className="container my-2" style={{color:props.mode==='light'?'#042743':'white'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charcters</p>
           <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"Nothing to preview it here"}</p>
        </div>
         </>
  

    )
}
