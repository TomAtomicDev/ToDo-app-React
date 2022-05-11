import React from "react";
import { AppUI } from "./AppUI";

/* const defaultTodos=[

  {text:'Cortar cebolla', completed:false, time:'7:00 AM'},
  
  {text:'Tormar el curso de intro a react', completed:false, time:'8:00 AM'},
  
  {text:'Llorar con la llorona', completed:true, time:'11:00 AM'},
  {text:'Sacarte los mocos', completed:true, time:'11:00 AM'}
]; */
function useLocalStorage (itemName, initialValue) {
 
  //Usando el localStorage para el array de ToDos
  const localStorageItem = window.localStorage.getItem(itemName);
  let parsedItem;
  
  if ( !localStorageItem) {
    window.localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem= [];
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }
  
  const [item, setItem]= React.useState(parsedItem);

  //Creando la función que guarda en LocalStorage y Actualiza el estado de los Todos
  const saveItem = (newItem) => {
    const stringifiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedTodos);
    setItem(newItem);
  };

  return [item, saveItem];
};



function App() {


  const [todos, saveTodos]= useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue]= React.useState('');

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


  return (

    <AppUI 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTodos={filteredTodos}
      isDoneTodo={isDoneTodo}
      isDeleted={isDeleted}
    />
   
  );
}

export default App;