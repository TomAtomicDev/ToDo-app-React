import React from 'react';
import { useLocalStorage } from './useLocalStorage';


function useTodos() {

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error
      }= useLocalStorage('TODOS_V1', []);
    
      const [searchValue, setSearchValue]= React.useState('');
      const [openModal, setOpenModal] = React.useState(false);


      const totalTodos = todos.length;
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      // doble negación es como  hacer una comparación de si nuestros items son true 
      
      let filteredTodos =[];
    
      if (searchValue.length===0) {
        filteredTodos=todos;
      } else {
        filteredTodos=todos.filter( todo =>{
    
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          
          return todoText.includes(searchText);
        })
      }
    
    
    
      //Creando la función que cambia la propiedad Completed
      // al escuchar un click en el ícono
      const isDoneTodo = (text)=>{
        const indexTodo = todos.findIndex(todo => todo.text===text); //encontramos el índice que tiene el mismo texto que el recibido
        let newTodos=[...todos];//un clon del array 
        //inicial para q React pueda hacer re-Render
        newTodos[indexTodo].completed=!newTodos[indexTodo].completed;
        saveTodos(newTodos);
      };
    
        //Creando la función que elimina el todo
      const isDeleted = (text)=>{
        const indexTodo = todos.findIndex(todo => todo.text===text); //encontramos el índice que tiene el mismo texto que el recibido
        let newTodos=[...todos];//un clon del array 
        //inicial para q React pueda hacer re-Render
        newTodos.splice(indexTodo,1);
        saveTodos(newTodos);
      }

        //Creando la función que añade el To-Do
      const addTodo = (newText) => {
        let newTodos=[...todos];

        //Comprobando que el texto recibido realmente sea nuevo
        const alreadyExists = newTodos.some(previousItem => {
          return previousItem.text===newText;
        });
        if (!alreadyExists) {        
          newTodos.push({
            completed: false,
            text:newText,
          });
          saveTodos(newTodos);
        };

      };
    
    return (
        {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filteredTodos,
            isDoneTodo,
            isDeleted,
            addTodo,
            openModal,
            setOpenModal
        }
    );
};

export { useTodos };