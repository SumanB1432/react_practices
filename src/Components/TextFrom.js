import React, { useState} from 'react';

//  const [text, setCount] = useState(0);
export default function TextFrom(props) {
    const [text, setText] = useState('Enter text here');
    // seText("new text")
    const upperCase =()=>{
        console.log("upper case was clicked")
        let newText = text.toUpperCase()
        setText(newText);

    }
    const handelChange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
  return (
  <div>
    <h1>{props.heading}</h1>
<div class="mb-3">
  {/* <label for="myBox" class="form-label">Example textarea</label> */}
  <textarea className="form-control" value={text} onChange={handelChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={upperCase}>Change to upper case</button>
  </div>
  )
}


