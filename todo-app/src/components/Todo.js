import React from "react";

export default function Todo(props) {
    return (
        <li className="todo">
       
        <div className="circle-box">
         <div className='outer-circle'>
            <div className='circle'></div>
           </div>
          </div>
        <div className="todo-item">
         <label className="todo-label" htmlFor="todo-0">
           {props.name}</label>
          
       </div>
       {/* <i class="fas fa-times cross"></i> */}
       </li>
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
    );
}
 