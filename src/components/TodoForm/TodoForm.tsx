import React, { useRef } from "react";

export const TodoForm: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      console.log(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="mt2">
      <label htmlFor="title" className="active">
        Add new task
      </label>
      <input
        ref={ref}
        onKeyPress={keyPressHandler}
        type="text"
        className="text"
        id="title"
        placeholder="Enter todo task"
      />
    </div>
  );
};
