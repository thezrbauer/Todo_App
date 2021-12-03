import './index.css';
import './App.css';
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  const taskList = props.tasks.map(task =>
    <Todo 
    id={task.id} 
    name={task.name} 
    completed={task.completed} 
    key={task.id}
    />
    );

  function addTask(name) {
    alert(name);
  }
  
  
  
  return (
    <div className="App">
      <div className="header-img"></div>
      <div className="titleWrap">
        <h1>TODO</h1>
        <div className="theme-toggle" ></div>
      </div>
     <Form addTask={addTask}/>
     
     <div className="list-container">
     <ul role="list" className="todo-list" aria-labelledby="list-heading">
      {taskList}
     </ul>

      <div className="footer "> 
        <div className="items-left">
        <h3 id="list-heading">5 items left</h3>
        </div> 
      <div className="btn-desktop">
       <FilterButton name="All"/>
       <FilterButton name="Active"/>
       <FilterButton name="Complte"/>
       </div> 
       
      <div className="btn-right">
      <button className="btn" type="button" aria-pressed="false">
        <span>Clear Completed</span>
       </button>
      </div>
      </div>
     
      </div>
      <div className='btn-mobile'>
        <FilterButton name="All"/>
        <FilterButton name="Active"/>
        <FilterButton name="Complte"/>
        </div>
      <h5>Drag and Drop to Reorder List</h5>
    </div>
  );
}

export default App;
