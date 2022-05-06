import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

//import './App.css';
const defaultTodos=[

  {text:'Cortar cebolla', completed:false, time:'7:00 AM'},
  
  {text:'Tormar el curso de intro a react', completed:false, time:'8:00 AM'},
  
  {text:'Llorar con la llorona', completed:true, time:'11:00 AM'},
  {text:'Sacarte los mocos', completed:true, time:'11:00 AM'}
];

function App() {

  const [todos, setTodos]= React.useState(defaultTodos);
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
    newTodos[indexTodo].completed=true;
    setTodos(newTodos);
  };

    //Creando la función que elimina el todo
  const isDelited = (text)=>{
    const indexTodo = todos.findIndex(todo => todo.text===text); //encontramos el índice que tiene el mismo texto que el recibido
    let newTodos=[...todos];//un clon del array 
    //inicial para q React pueda hacer re-Render
    newTodos.splice(indexTodo,1);
    setTodos(newTodos);
  }


  return (

   <React.Fragment>

      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />   

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}  
      />

      <TodoList>

        {filteredTodos.map(
          todo =>(
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed} 
              time={todo.time}
              onComplete={() => isDoneTodo(todo.text)}
              onDelete={() => isDelited(todo.text)}
              />
              ))
        }
      
      </TodoList>

      <CreateTodoButton />  

   </React.Fragment>
  );
}

export default App;