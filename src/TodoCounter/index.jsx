import React from "react";
import pencil  from '../Assets/android-chrome-192x192.png'
import './TodoCounter.css';



function TodoCounter({totalTodos, completedTodos, loading}){ 

    return (
        <header>
            <h1 className="appTitle">My Tasks <img src={pencil} alt="pencil" /></h1>        
            <h2 className={`TodoCounter ${loading && "TodoCounter__loading"}`}
            >You've completed {completedTodos} of {totalTodos} To-Dos</h2>
        </header>
    )
};

export {TodoCounter};