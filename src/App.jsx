import React, { Component } from "react";
import Articles from "./Components/Articles";
import { Route, Switch } from "react-router-dom";
import CategoryHeader from './Components/CategoryHeader';
import LoginForm from './Components/LoginForm'
import { connect } from 'react-redux'

class App extends Component {

  clickHandler = () => {
   this.props.dispatch({ 
     type: "LOGIN-FORM", 
     payload: 

     <LoginForm /> 
  })
  }
  
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
        <div>
          <button onClick={this.clickHandler}>Log-In</button>
        </div>
      </>
    );
  }
}

export default connect()(App);