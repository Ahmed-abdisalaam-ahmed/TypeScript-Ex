import { useState } from "react";

interface Task {
  id: number
  task: string
  done: boolean
}
const TodoList = () => {
  const [todos, setTodos] = useState<Task[]>([]);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      task: `New Task No: ${todos.length + 1}`,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <button onClick={addTodo} className="border p-2 mb-4">
        CLick to Add Task
      </button>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="border p-4">
            <h3 >The ID of the Task: {todo.id}</h3>
            <h3>The Task {todo.task}</h3>
            <p>Done: {todo.done ? "Haa" : "maya"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
