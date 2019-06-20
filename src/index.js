import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Trinkets from "./components/Trinkets";
import Trinket from "./components/Trinket";
import data from "./data";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">Jason's Trinkets</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/trinkets">Trinkets</Link>
          </div>
        </nav>

        <Route path="/" exact render={() => <Home items = {data} />} />
        <Route path="/trinkets" exact render ={() => <Trinkets items={data} />} />
        <Route path="/trinket/:id" exact render ={() => <Trinket items={data} />} />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
