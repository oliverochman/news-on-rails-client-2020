import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import CategoryHeader from "./components/CategoryHeader";
import LoginForm from "./components/LoginForm";
import { Header, Icon } from "semantic-ui-react";

const App = (props) => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header as="h1" icon textAlign="center">
          <Icon name="train" circular />
          News on Rails
        </Header>
        <CategoryHeader />
        <Switch>
          <Route exact path="/" component={Articles}></Route>
          <Route exact path="/articles/:category" component={Articles}></Route>
        </Switch>
        {props.renderLoginForm && <LoginForm />}
      </Suspense>
    </>
  );
};
const mapStateToProps = (state) => {
  return { renderLoginForm: state.renderLoginForm };
};

export default connect(mapStateToProps)(App);
