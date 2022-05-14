import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI() {
  return (
    <React.Fragment>

    <TodoCounter/>   

    <TodoSearch />

    <TodoContext.Consumer>
      {value => {
        return (
          <TodoList>
            {/* Implementando los estados de carga */}
            {value.error && <p>Oh no! Algo no sucedió como esperado</p> }
            {value.loading &&  
              <p>Estamos cargando, aguarda un poco...</p> }
            { (!value.loading && !value.filteredTodos.length) &&  <p>Crea tu primer To-Do!</p> }


            {/* Para mostrar los To-Dos del array filteredTodos */}
            {value.filteredTodos.map(
              todo =>(
                <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed} 
                  time={todo.time}
                  onComplete={() => value.isDoneTodo(todo.text)}
                  onDelete={() => value.isDeleted(todo.text)}
                  />
                  ))
            }
          </TodoList>
        );
      }}
    </TodoContext.Consumer>

    



    <CreateTodoButton />  

 </React.Fragment>
  );
}

export { AppUI };