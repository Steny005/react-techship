export default function Student(){
  const students=[
    "Steny",
    "KP",
    "Neha"
  ];
  return(
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student,index)=>(
          <li key={index}>{index + ` `}{student}</li>
        ))}
      </ul>
    </div>
  )
}