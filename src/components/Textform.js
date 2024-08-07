import React,{useState} from 'react'


export default function Textform(props) {
    const handleUpClick =()=>{
        //console.log("click clicked" + text);
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase","success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

      const handleCopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied","success");
      }

      const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("removed spaces","success");
      }

    const handleloClick =()=>{
        //console.log("click clicked" + text);
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lowercase","success");
    }
    const handlekoClick =()=>{
        //console.log("click clicked" + text);
        let newtext='';
        setText(newtext);
        props.showAlert("Space cleared","success");
    }
    const handleOnChange =(event)=>{
        //console.log("on clicked");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here' );
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
<div className="mb-3">
    <h1>{props.heading1}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-4" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-4" onClick={handleloClick}>Convert to Lowcase</button>
<button className="btn btn-primary mx-4 " onClick={handlekoClick}>Clear</button>
<button className="btn btn-primary mx-4 " onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-4 " onClick={handleExtraSpaces}>Remove Spaces</button>
<button type="submit" onClick={speak} className="btn btn-dark mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>your text summary</h2>
        <p>{(text.length>0)?text.trim().split(" ").length:0}words and {text.length} character</p>
        <p>{0.008*text.split(" ").length}time takes to read this</p>
    </div>
    </>
  )
}
