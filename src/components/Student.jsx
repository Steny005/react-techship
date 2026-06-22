import {useState} from "react";

export default function Student(props){ 
const[text,setText]=useState("");
const handleChange=(e)=>{
  setText(e.target.value)
}
return(
  <>
  <div>
    <h1>Character Count</h1>
    <textarea rows="4"
    cols="40"
    placeholder="Start typing"
    value={text}
    onChange={handleChange}></textarea>
    <h3>Character count: {text.length}</h3>
  </div>
</>
);
}


    