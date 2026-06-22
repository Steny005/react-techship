import {useState} from 'react';
export default function Student(){
  const [state,showState]=useState(0);
  const toggle=()=>{
    showState(!state);
  };
  return(
    <>
<div>
  <button onClick={toggle}>
    {state? "Hide Content": "Show"}
  </button>
  {state && (
        <div>
          <h3>React is Awesome!</h3>
          <p>This section can be expanded and collapsed.</p>
        </div>
      )}
</div>
</>
  );
}