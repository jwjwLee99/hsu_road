import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "../components/Menu";
import { Main, Restorance, Home, Posts, Pages } from "../route";

class App extends Component {
  render() {
    return (
      <div>
        <Menu></Menu>
        <div className="mainContents">
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/res" component={Restorance}></Route>
            <Route path="/pages" component={Pages}></Route>
            <Route path="/posts" component={Posts}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
