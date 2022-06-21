import React from 'react';
import { FaClipboardList } from 'react-icons/fa';
import './TodosEmpty.css';

function TodosEmpty () {
  return (
    <div className="TodosEmpty">
      <FaClipboardList className='board-icon' />
      <p className="altMessage--empty">Add your first To-Do!</p>
    </div>
    
  )
};

export {TodosEmpty};