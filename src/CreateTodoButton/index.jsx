import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const openModal = ()=>{
        alert("Aquí viene un modal")
    };
    return (
        <button 
            className="CreateTodoButton"
            onClick={openModal}
        >
                +
        </button>
    );
};

export {CreateTodoButton};