import React, {useState} from 'react'

export default function MyForm(props) {

    const [text,setText] = useState("");
    const upText = () => 
    {
        let newText=text.toUpperCase();
        setText(newText);
    }
    const loText = () => 
    {
        let newText=text.toLowerCase();
        setText(newText);
    }

    const clearText = () => 
    {
        let newText="";
        setText(newText);
    }

    const removeSpaceText = () => 
    {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const copyText = () => 
    {
        let newText=document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleOnChange = (event) =>
    {
        setText(event.target.value);
    }

  return (
<>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{resize:"none"}} required> </textarea>
        </div>
        <button className="btn btn-primary mx-3 my-2 " onClick={upText} >Convert to UpperCase   </button>
        <button className="btn btn-primary mx-3 my-2 " onClick={loText} >Convert to LowerCase   </button>
        <button className="btn btn-primary mx-3 my-2 " onClick={clearText} >Clear Textarea </button>
        <button className="btn btn-primary mx-3 my-2 " onClick={removeSpaceText} >Remove space </button>
        <button className="btn btn-primary mx-3 my-2 " onClick={copyText} >Copy Text </button>
    </div>
    <div className='container my-3'>
        <h2>Your Text Summary</h2>

        <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
    </div>
    </>
  )
}
