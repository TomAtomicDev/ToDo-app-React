import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){

    const [newTodoText, setNewTodoText] = React.useState('');

    const {
        addTodo,
        setOpenModal
        }= React.useContext(TodoContext);

    const onChangeFunc = (event) => {
        if (event.target.value!=='+'){
        setNewTodoText(event.target.value)
        }
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (newTodoText) {
            addTodo(newTodoText)
        };
        setOpenModal(false);
    };

    const enterKeyHandler = (event) => {
        event.stopPropagation();
        if (event.key === "Enter") {
            onSubmit(event);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="newTask">Write down your new task</label>
            <textarea
                autoFocus 
                name=""     
                id="newTask" 
                cols="30" 
                rows="10"
                value={newTodoText}            
                placeholder="Press 'Enter' to add your task"
                onChange={onChangeFunc}
                onKeyDown={enterKeyHandler}
            />

            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel '
                    onClick={onCancel}
                >Cancel

                </button>
                <button
                    type='submit'
                    //Ya no necesitamos un onClick xq está ligado al onSubmit del formulario
                    className='TodoForm-button TodoForm-button--add'
                >Add To-Do

                </button>
            </div>
        </form>
    )
}

export { TodoForm };
