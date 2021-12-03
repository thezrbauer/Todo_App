import React from 'react'



function Form(props) {

    function handleSubmit(e) {
       e.preventDefault();
        props.addTask("Say Hello!");
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
        title="Create a new todo.."
        placeholder="Create a new todo.."
      />
      <button type="submit" className="btn add-btn">
        Add
      </button>
     </form>
    
    );
}

export default Form
