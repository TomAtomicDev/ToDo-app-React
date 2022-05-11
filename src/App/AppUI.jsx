import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  filteredTodos,
  isDoneTodo,
  isDeleted,
}) {
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
            onDelete={() => isDeleted(todo.text)}
            />
            ))
      }
    
    </TodoList>

    <CreateTodoButton />  

 </React.Fragment>
  );
}

export { AppUI };