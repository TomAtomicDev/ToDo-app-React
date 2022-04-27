import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

//import './App.css';
const todos=[

  {text:'Cortar cebolla', completed:false},
  
  {text:'Tormar el curso de intro a react', completed:false},
  
  {text:'Llorar con la llorona', completed:false}
];

function App() {
  return (

   <react.Fragment>

      <TodoCounter />   

      <TodoSearch />

      <TodoList>

        {todos.map(
          todo =>(
            <TodoItem 
              key={todo.text} 
              text={todo.text} />
              ))
        }
      
      </TodoList>

      <CreateTodoButton />  

   </react.Fragment>
  );
}

export default App;