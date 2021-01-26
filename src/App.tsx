import React, { useState } from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { ITodo } from "./interfaces/interfaces";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm onAdd={addHandler} />
        <TodoList todos={todos} />
      </div>
    </>
  );
};

export default App;
