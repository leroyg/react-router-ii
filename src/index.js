import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Trinkets from "./components/Trinkets";
import Trinket from "./components/Trinket";
import data from "./data";
import "./styles.css";

class App extends React.Component {
    state = {
        items: []
    }

componentDidMount(){
    this.setState({
        items:data
    })
}

  render() {
      const { items } = this.state.items
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">Books I Enjoy!</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/trinkets">Books</Link>
          </div>
        </nav>

        <Route path="/" exact render={(props) => <Home items = {items} />} />
        <Route path="/trinkets" exact render ={(props) => <Trinkets {...props} items={data} />} />
        <Route path="/trinket/:id" render ={(props) => <Trinket {...props}items={data} />} />
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
