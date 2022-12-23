import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}){

    const clickOnAddButton = ()=>{
        setOpenModal(prevState => !prevState);
    };

    React.useEffect(()=>{
        const plusKeyPressed = (eve) => {
            eve.stopPropagation();
            if (eve.key === '+'){
                setOpenModal(true);            
            };
        }
        return document.addEventListener('keydown',plusKeyPressed);
    }, [setOpenModal]) 

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