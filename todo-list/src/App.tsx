import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddForm } from "./AddTodoForm";

const initialTodos: Todo[] = [];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="main">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddForm addTodo={addTodo} />
    </div>
  );
}

export default App;
