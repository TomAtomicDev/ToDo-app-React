import React from "react";
import { TodoContext } from '../TodoContext';
import pencil  from '../Assets/android-chrome-192x192.png'
import './TodoCounter.css';



function TodoCounter(){

    const {totalTodos, completedTodos, loading} = React.useContext(TodoContext); 

    return (
        <header>
            <h1 className="appTitle">My Tasks <img src={pencil} alt="pencil" /></h1>        
            <h2 className={`TodoCounter ${loading && "TodoCounter__loading"}`}
            >You've completed {completedTodos} of {totalTodos} To-Dos</h2>
        </header>
    )
};

export {TodoCounter};