import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header-img"></div>
      <div className="titleWrap">
        <h1>TODO</h1>
        <div className="theme-toggle" ></div>
      </div>
     <form id="form"> 
      <div>
        <div className='outer-circle'>
            <div className='circle'></div>
          </div>
        </div>
       <input
        type="text"
        id="new-todo-input"
        className="input"
        name="text"
        autoComplete = "off"
        title="Create a new todo.."
        placeholder="Create a new todo.."
      />
     </form>
     
     <div className="list-container">
     <ul role="list" className="todo-list" aria-labelledby="list-heading">
       <li className="todo">
        <div className="circle-box">
         <div className='outer-circle'>
            <div className='circle'></div>
           </div>
          </div>
        <div className="todo-item">
  
         <label className="todo-label" htmlFor="todo-0">
           Complete online JS Course
           </label>
       </div>
       <i class="fas fa-times cross"></i>
       </li>

       <li className="todo">
       
        <div className="circle-box">
         <div className='outer-circle'>
            <div className='circle'></div>
           </div>
          </div>
        <div className="todo-item">
         <label className="todo-label" htmlFor="todo-1">
           10 Minutes meditation</label>
          
       </div>
       <i class="fas fa-times cross"></i>
       </li>

       <li className="todo">
         <div className="circle-box">
         <div className='outer-circle'>
            <div className='circle'></div>
           </div>
          </div>
        <div className="todo-item">
         <label className="todo-label" htmlFor="todo-1">
           Read for 1 hour</label>
       </div>
       <i class="fas fa-times cross"></i>
       </li>
     </ul>

      <div className="footer "> 
        <div className="items-left">
        <h3 id="list-heading">5 items left</h3>
        </div> 
      <div className="btn-desktop">
       <button className="btn toggle-btn" type="button" aria-pressed="true">
        <span>All</span>
       </button>
       <button className="btn toggle-btn" type="button" aria-pressed="false">
        <span>Active</span>
      </button>
       <button className="btn toggle-btn" type="button" aria-pressed="false">
        <span>Complete</span>
       </button>
       </div> 
       
      <div className="btn-right">
      <button className="btn" type="button" aria-pressed="false">
        <span>Clear Completed</span>
       </button>
      </div>
      </div>
     
      </div>
      <div className='btn-mobile'>
          <button >All</button>
          <button >Active</button>
          <button>Completed</button>
        </div>
      <h5>Drag and Drop to Reorder List</h5>
    </div>
  );
}

export default App;
