import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm'
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import './App.css';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { TodosEmpty } from '../TodosEmpty';
import { Footer } from '../Footer';


function AppUI() {

  const value = React.useContext(TodoContext);

  return (
    <React.Fragment>

      <div className="myTasksApp">

        <TodoCounter/>   

        <TodoSearch />

        <TodoList>
          {/* Implementando los estados de carga */}
          {value.error && <TodosError error={value.error} /> }

          {value.loading && <TodosLoading/> }

          { (!value.loading && !value.totalTodos) &&  <TodosEmpty /> }

          { (!value.filteredTodos.length && Boolean(value.totalTodos)) &&  
          <p className="altMessage">
            No se encontró: <span>'{value.searchValue}'</span>
          </p> }


          {/* Para mostrar los To-Dos del array filteredTodos */}
          {value.filteredTodos.map(
            todo =>(
              <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed} 
                onComplete={() => value.isDoneTodo(todo.text)}
                onDelete={() => value.isDeleted(todo.text)}
                />
                )) /* &&
          <p>No se encontró <span>{value.searchValue}</span></p> */

          }
        </TodoList>

        {!!value.openModal && (
              <Modal>
                <TodoForm />
              </Modal>
        )}


        <CreateTodoButton/>
      </div>

      <Footer />

    </React.Fragment>
  );
}

export { AppUI };