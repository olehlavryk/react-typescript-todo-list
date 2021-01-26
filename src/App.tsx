import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { TodoForm } from "./components/TodoForm/TodoForm";

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
};

export default App;
