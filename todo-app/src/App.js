
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
       <h1>TODO</h1>
       <button>Dark/Light</button>
      </div>
     <form>
       <input
        type="text"
        id="new-todo-input"
        className="input"
        name="text"
        autoComplete = "off"
      />

     </form>
     <div>
     <ul>
       <li className="todo">
        <div className="todo-item">
         <input id="todo-0" type="checkbox" defaultChecked={true}/>
         <label className="todo-label" htmlFor="todo-0">
           Complete online JS Course
           </label>
           <button>Delete</button>
       </div>
       </li>

       <li className="todo">
        <div className="todo-item">
         <input id="todo-1" type="checkbox" defaultChecked={false}/>
         <label className="todo-label" htmlFor="todo-1">
           10 Minutes meditation</label>
           <button>Delete</button>
       </div>
       </li>

       <li className="todo">
        <div className="todo-item">
         <input id="todo-2" type="checkbox" defaultChecked={false}/>
         <label className="todo-label" htmlFor="todo-1">
           Read for 1 hour</label>
           <button>Delete</button>
       </div>
       </li>
     </ul>

      <div> 
        <h3 id="list-heading">
       5 items left
      </h3>
      <button className="btn toggle-btn" aria-pressed="true">
        <span>All</span>
      </button>
      <button className="btn toggle-btn" aria-pressed="false">
        <span>Active</span>
      </button>
      <button className="btn toggle-btn" aria-pressed="false">
        <span>Complete</span>
      </button>
      <button className="btn" aria-pressed="false">
        <span>Clear Completed</span>
      </button>


      </div>
      </div>
      <h5>Drag and drop to reorder list</h5>

    </div>
  );
}

export default App;
