import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import CategoryHeader from "./components/CategoryHeader";
import LoginForm from "./components/LoginForm";

class App extends Component {
  clickHandler = () => {
    debugger
    this.props.dispatch({
      type: "LOGIN_FORM_VISIBILITY",
      payload: true,
    });
  };

  render() {
    return (
      <>
        <CategoryHeader />
        <Switch>
          <Route exact path="/" component={Articles}></Route>
          <Route exact path="/articles/:category" component={Articles}></Route>
        </Switch>
        <button onClick={this.clickHandler}>Login</button>
      </>
    );
  }
}

export default connect()(App);