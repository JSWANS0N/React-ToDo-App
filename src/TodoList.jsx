
export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
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
    );
}