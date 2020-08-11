import React, { Component } from "react";
import Articles from "./Components/Articles";
import { Route, Switch } from "react-router-dom";
import CategoryHeader from './Components/CategoryHeader'


class App extends Component {
  render() {
    return (
      <>
        <div>
          <CategoryHeader />
          <Switch>
            <Route exact path="/" component={Articles}></Route>
            <Route exact path="/articles/:category" component={Articles}></Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default App;