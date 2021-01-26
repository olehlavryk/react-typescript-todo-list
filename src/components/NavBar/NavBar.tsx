import React from "react";

export const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper green darken-2 px1">
        <div className="container">
          <a href="/" className="brand-logo">
            Todo List
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">Todo list</a>
            </li>
            <li>
              <a href="/">Information</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
