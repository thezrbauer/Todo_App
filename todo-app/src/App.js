import { nanoid } from "nanoid";
import React, { useState } from "react";
import './index.css';
import './App.css';
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";



const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
  setTasks(remainingTasks);
  }
  
  
  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
    <Todo 
      id={task.id} 
      name={task.name} 
      completed={task.completed} 
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
    ));

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
    key={name} 
    name={name}
    isPressed={name === filter}
    setFilter={setFilter}
    />
    ));
    
    function addTask(name) {
      const newTask = { id: "todo-" + nanoid(), name: name, completed: false };

      setTasks([...tasks, newTask]);
    }
    // Allows #list-headings content to update as new todos are added.
    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${tasksNoun} remaining`;
    
    function editTask(id, newName) {
      const editedTaskList = tasks.map(task => {
      // if this task has the same ID as the edited task
        if (id === task.id) {
          //
          return {...task, name: newName}
        }
        return task;
      });
      setTasks(editedTaskList);
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
        <h3 id="list-heading">{headingText}</h3>
        </div> 
      <div className="btn-desktop">
       {filterList}
       </div> 
       
      <div className="btn-right">
      <button className="btn" type="button" aria-pressed="false">
        <span>Clear Completed</span>
       </button>
      </div>
      </div>
     
      </div>
      <div className='btn-mobile'>
      {filterList}
        </div>
      <h5>Drag and Drop to Reorder List</h5>
    </div>
  );
}

export default App;
