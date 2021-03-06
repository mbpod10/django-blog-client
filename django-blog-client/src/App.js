import React from "react";
import "./App.css";
import Home from "./components/Home";
import Posts from "./components/Posts";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Switch>
      <div className="App">
        <Route component={NavBar} />
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
      </div>
    </Switch>
  );
}

export default App;
