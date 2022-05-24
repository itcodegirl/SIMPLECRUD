import "./App.css";
import { useState } from "react";

function App() {
  //a variable that can be changed and sent to our database
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const displayInfo = () => {
    console.log(name + age + country + position + wage);
  };
  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="text"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage (year):</label>
        <input
          type="text"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button>Add Employee</button>
      </div>
    </div>
  );
}

// The onchange event is one of the events in JavaScript which is used for
// making the change in the state and transforming the value once the event is triggered.
// The onchange event occurs when the value of an element has been changed.
// The onChange takes a function inside of it, grabs whatever we have written in our input and
// sets the state equal to that.
// event.target.value is equal to whatever is in the input
export default App;
