import React from "react";
import { BsCheckCircleFill } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs';
import { BsX } from 'react-icons/bs';
import './TodoItem.css';

function TodoItem(props) {


    return (
      <li className={`TodoItem ${props.completed?'complete':''}`}>

        <div className="Icon Icon-check" onClick={props.onComplete}>
          {props.completed ?
            <BsCheckCircleFill size="3.8rem"/>
            :
            <BsCircle size="3.8rem"/>
          } 
        </div>


        <div className={`task ${props.completed?'task--complete':''}`}>
          <p className={`task__name `}>
            {props.text}
          </p>
          <div className="task__end">
           
            <BsX            
              className="Icon Icon-delete"
              onClick={props.onDelete}
            />
            
          </div>

        </div>

      </li>
    );
  }
  
  export { TodoItem };