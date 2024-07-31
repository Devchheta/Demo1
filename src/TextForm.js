import React,{useState}from "react";

function TextForm(props) {
    const [text,setText]=useState("Hello Everyone")
    const uppercase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.ShowAlert("Converted  uppercse","success");

    }
    const lowercase=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.ShowAlert("Converted lowercase","success");
    }
    const Clear=()=>{
      setText("");
      props.ShowAlert("Text Cleared!","success")
    }
    const copy=()=>{
      var text=document.getElementById("floatingTextarea");
      text.select();
      text.setSelectionRange(0,999);
      navigator.clipboard.writeText(text.value)
      props.ShowAlert("Copied to Clipbroad","success");
    }
    
   const handleonchange =(event)=>{
    console.log("ON Change");
    setText(event.target.value);
   }
    
  return (

      <div className="form-floating" style={{color:props.mode==='dark'?'white':'black'}}>
        <h3>{props.title}</h3>
        <textarea
         value={text}
          onChange={handleonchange}
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          rows="10"
        ></textarea>
        <button  className="btn btn-primary my-3 mx-2" onClick={uppercase}>convert to uppercase</button>
        <button  className="btn btn-primary my-3 mx-2" onClick={lowercase}>convert to lowercase</button>
        <button  className="btn btn-primary my-3 mx-2" onClick={Clear}>Clear Text</button>
        <button  className="btn btn-primary my-3 mx-2" onClick={copy}>Copy </button>
        <h3>Text Summary</h3>
        <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length}
        Words and {text.length} Characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
  );
}
export default TextForm