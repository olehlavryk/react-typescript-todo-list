import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper green darken-2 px1">
        <div className="container">
          <NavLink to="/" className="brand-logo">
            Todo List
          </NavLink>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink to="/">Todo list</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
