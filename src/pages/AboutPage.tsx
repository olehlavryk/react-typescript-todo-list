import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>About page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, ipsum
        necessitatibus! Ea esse nemo corporis aut debitis enim explicabo
        inventore.
      </p>
      <button className="btn" onClick={() => history.push("./")}>
        Back to todo list
      </button>
    </>
  );
};
