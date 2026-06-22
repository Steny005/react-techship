import './App.css'
import Student from "./components/Student.jsx";
function App() {
  return (
    <div>
  <Student name="Steny" course="CSE" email="steny@gmail.com" skills={["React","CSS","AI"]}/>
    </div>
  );
}

export default App
