import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import './TodosEmpty.css';

function TodosEmpty () {
  return (
    <div className="TodosEmpty">
      <ul className="altMessage--special">
        <li>Save this page to your Favorites</li>
        <li>Your To-Do List is stored on your device</li>
        <li>It'll be there even if you turn it off!</li>
      </ul>
      <FaClipboardList className='board-icon' />
      <p className="altMessage--empty">Add your first To-Do!<br />You can press '+' on your keyboard!</p>
    </div>
    
  )
};

export {TodosEmpty};