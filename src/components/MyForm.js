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

    const handleOnChange = (event) =>
    {
        setText(event.target.value);
    }

  return (
<>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{resize:"none"}} > </textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={upText} >Convert to UpperCase   </button>
        <button className="btn btn-primary mx-3" onClick={loText} >Convert to LowerCase   </button>
        <button className="btn btn-primary" onClick={clearText} >Clear Textarea </button>
    </div>
    <div className='container my-3'>
        <h2>Your Text Summary</h2>

        <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
