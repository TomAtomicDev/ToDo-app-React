import React from "react";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { TodosEmpty } from "../TodosEmpty";
import { Footer } from "../Footer";
import welcomeLeft from "../Assets/welcome-left.png";
import welcomeRight from "../Assets/welcome-right.png";
import "./App.css";

function App() {
  const value = useTodos();

  return (
    <React.Fragment>
      <div className='myTaskApp'>
        {!value.loading && (
          <img
            src={welcomeLeft}
            alt='A man with a computer'
            className='welcome-left'
          />
        )}

        <div className='myTasksApp-center'>
          <TodoHeader>
            <TodoCounter
              totalTodos={value.totalTodos}
              completedTodos={value.completedTodos}
              loading={value.loading}
            />

            <TodoSearch
              searchValue={value.searchValue}
              setSearchValue={value.setSearchValue}
              loading={value.loading}
            />
          </TodoHeader>

          <TodoList>
            {/* Implementando los estados de carga */}
            {value.error && <TodosError error={value.error} />}

            {value.loading && <TodosLoading />}

            {!value.loading && !value.totalTodos && <TodosEmpty />}

            {!value.filteredTodos.length && Boolean(value.totalTodos) && (
              <p className='altMessage'>
                No se encontró: <span>'{value.searchValue}'</span>
              </p>
            )}

            {/* Para mostrar los To-Dos del array filteredTodos */}
            {value.filteredTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => value.isDoneTodo(todo.text)}
                onDelete={() => value.isDeleted(todo.text)}
              />
            ))}
          </TodoList>

          {!!value.openModal && (
            <Modal>
              <TodoForm
                addTodo={value.addTodo}
                setOpenModal={value.setOpenModal}
              />
            </Modal>
          )}

          <CreateTodoButton setOpenModal={value.setOpenModal} />
        </div>
        {!value.loading && (
          <img
            src={welcomeRight}
            alt='A woman with a computer'
            className='welcome-right'
          />
        )}
      </div>

      <Footer loading={value.loading} />
    </React.Fragment>
  );
}

export default App;
