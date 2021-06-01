import React from "react";

interface Props {
  todo: Todo;
}

export const TodoListItem: React.FC<Props> = ({ todo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.isComplete ? "line-through" : undefined }}
      >
        <input type="checkbox" checked={todo.isComplete} />
        {todo.text}
      </label>
    </li>
  );
};
