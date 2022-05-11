import React from "react";
import './TodoItem.css';

function TodoItem(props) {


    return (
      <li className="TodoItem">
        <span 
          className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
          onClick={props.onComplete}
        >
          √
        </span>
        <div className={`task ${props.completed?'task--complete':''}`}>
          <p className={`task__name `}>
            {props.text}
          </p>
          <div className="task__end">
            <p className={`task__time` }>
              {props.time}
            </p>
            <span 
              className="Icon Icon-delete"
              onClick={props.onDelete}
            >
              X
            </span>
          </div>

        </div>

      </li>
    );
  }
  
  export { TodoItem };