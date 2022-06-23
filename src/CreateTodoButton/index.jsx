import React from "react";
import { TodoContext } from '../TodoContext'
import './CreateTodoButton.css'

function CreateTodoButton(props){

    const {setOpenModal} = React.useContext(TodoContext);

    const plusKeyPressed = (event) => {
        event.stopPropagation();
        if (event.key === '+'){
            setOpenModal(true);            
        };

    }

    const clickOnAddButton = ()=>{
        setOpenModal(prevState => !prevState);
    };

    React.useEffect(()=>{
        return document.addEventListener('keydown',plusKeyPressed);
    }, [])

    return (
        <button 
            className="CreateTodoButton"
            onClick={clickOnAddButton}
        >
                +
        </button>
    );
};

export {CreateTodoButton};