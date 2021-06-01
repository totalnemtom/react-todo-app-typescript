import "./App.css";
import { TodoListItem } from "./TodoListItem";

const todos: Todo[] = [
  {
    text: "Walk the dog",
    isComplete: false,
  },
  {
    text: "Write app",
    isComplete: true,
  },
];

function App() {
  return (
    <div className="App">
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </div>
  );
}

export default App;
