import { useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) =>
      [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false }
      ]
    );
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos =>
      currentTodos.map(todo =>
        todo.id === id
        ? { ...todo, completed }
        : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(currentTodos => 
      currentTodos.filter(todo => todo.id !== id)
    );
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {
          todos.map(todo => {
            return ( 
              <li key={todo.id}>
                <label>
                  <input type="checkbox" 
                    checked={todo.completed}
                    onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                  {todo.title}
                </label>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </li>
            );
          })
        }
      </ul>
    </>
  );
}