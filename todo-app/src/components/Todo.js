import React, { useEffect, useRef, useState } from "react";


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}


export default function Todo(props) {

  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  
  const editFieldRef = useRef(null);
  const editButtonRef = useRef(null);

  const wasEditing = usePrevious(isEditing);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }
  
  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={props.id}>
          New name for {props.name}
        </label>
        <input id={props.id} 
        className="todo-text"
        type="text" 
        value={newName}
        onChange={handleChange}
        ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button type="button" className="btn todo-cancel" onClick={() => setEditing(false)}>
          Cancel
          <span className="visually-hidden">renaming {props.name}</span>
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  
  const viewTemplate = ( 
  <li className="todo">
  <div className="todo-input">
  <input 
  id={props.id} 
  type="checkbox"  
  defaultChecked={props.completed}  
  onChange={() => props.toggleTaskCompleted(props.id)}/>
  <label htmlFor="checkbox"></label>
 </div>
 <div className="todo-item">
 <label className="todo-label" htmlFor={props.id}>
  {props.name}</label>
 
</div>
<div className="todo-btn-box">
{/* <button type="button" className="btn" onClick={() => setEditing(true)} ref={editButtonRef}>
  Edit <span className="dlt-btn">{props.name}</span>
</button> */}

<div
   type="button"
   className="cross"
   onClick={() => props.deleteTask(props.id)}
 >
    <span className="dlt-btn">{props.name}</span>
 </div>
 </div>
</li>
  );

  useEffect(() => {
  if (!wasEditing && isEditing) {
    editFieldRef.current.focus();
  }
  if (wasEditing && !isEditing) {
    editButtonRef.current.focus();
  }
}, [wasEditing, isEditing]);


    return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

    //    <li className="todo">
       
    //    <div className="circle-box">
    //     <div className='outer-circle'>
    //        <div className='circle'></div>
    //       </div>
    //      </div>
    //    <div className="todo-item">
    //     <label className="todo-label" htmlFor="todo-1">
    //       10 Minutes meditation</label>
         
    //   </div>
    //   {/* <i class="fas fa-times cross"></i> */}
    //   </li>

    //   <li className="todo">
    //     <div className="circle-box">
    //     <div className='outer-circle'>
    //        <div className='circle'></div>
    //       </div>
    //      </div>
    //    <div className="todo-item">
    //     <label className="todo-label" htmlFor="todo-1">
    //       Read for 1 hour</label>
    //   </div>
    //   {/* <i class="fas fa-times cross"></i> */}
    //   </li>
    
}
 