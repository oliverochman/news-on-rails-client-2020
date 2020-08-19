import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import CategoryHeader from "./components/CategoryHeader";
import LoginForm from "./components/LoginForm";
import GeoLocation from "./components/GeoLocation"

const App = (props) => {
  return (
    <>
      <CategoryHeader />
      <Switch>
        <Route exact path="/" component={Articles}></Route>
        <Route exact path="/articles/:category" component={Articles}></Route>
      </Switch>
      {props.renderLoginForm && <LoginForm />}
      <GeoLocation />
    </>
  );
};
const mapStateToProps = (state) => {
  return { renderLoginForm: state.renderLoginForm };
};

export default connect(mapStateToProps)(App);