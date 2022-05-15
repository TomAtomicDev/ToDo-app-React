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
        setNewTodoText(event.target.value)
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoText);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="newTask">Write down your new task</label>
            <textarea 
                name=""     
                id="newTask" 
                cols="30" 
                rows="10"
                value={newTodoText} 
                onChange={onChangeFunc}
                placeholder='Practice public speaking with TED Talks...'/>

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