import './App.css';

function App() {
  return (
    <div className="App">
      <div className='information'>
        <label>Name:</label>
        <input type="text" />
        <label>Age:</label>
        <input type="text" />
        <label>Country:</label>
        <input type="text" />
        <label>Position:</label>
        <input type="text" />
        <label>Wage (year):</label>
        <input type="text" />
        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
