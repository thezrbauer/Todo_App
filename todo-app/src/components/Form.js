import React, { useState } from "react";




function Form(props) {

  const [name, setName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }
  function handleSubmit(e) {
      e.preventDefault();
      props.addTask(name);
      setName("");
      }
      
    return (
       <form onSubmit={handleSubmit} id="form"> 
       <div className="container">
         <div className="round">
         <input type="checkbox"   />
         <label htmlFor="checkbox"></label>
        </div>
        </div>
       <input
        type="text"
        id="new-todo-input"
        className="input"
        name="text"
        autoComplete = "off"
        value={name}
        onChange={handleChange}
        title="Create a new todo.."
        placeholder="Create a new todo.."
      />
     
     </form>
    
    );
}

export default Form
