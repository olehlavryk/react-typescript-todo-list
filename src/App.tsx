import React from "react";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { AboutPage } from "./pages/AboutPage";
import { TodosPages } from "./pages/TodosPages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <HashRouter basename="/">
        <NavBar />
        <div className="container">
          <Switch>
            <Route component={TodosPages} path="/" exact />
            <Route component={AboutPage} path="/about" />
          </Switch>
        </div>
      </HashRouter>
    </BrowserRouter>
  );
};

export default App;
