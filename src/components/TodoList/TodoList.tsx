import React, { useCallback } from "react";
import { TodoListProps } from "./../../interfaces/interfaces";

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onRemove,
}) => {
  const removeHandler = useCallback(
    (event: React.MouseEvent, id: number) => {
      event.preventDefault();
      onRemove(id);
    },
    [onRemove]
  );

  const toggleHandler = useCallback(
    (id: number) => {
      onToggle(id);
    },
    [onToggle]
  );

  if (todos.length === 0) return <p className="center">There are no tasks.</p>;
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];

        if (todo.completed) {
          classes.push("completed");
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleHandler(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
