import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import CategoryHeader from "./components/CategoryHeader";
import LoginForm from "./components/LoginForm";
import { Header, Icon } from "semantic-ui-react";
import { useDispatch } from 'react-redux'
import AccountHeader from "./components/AccountHeader";

const App = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    let coords
    navigator.geolocation.getCurrentPosition(position => {
      coords = position.coords
      dispatch({ type: 'SET_LOCATION', payload: { longitude: coords.longitude, latitude: coords.latitude } })
    })
  }, [])

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header as="h1" icon textAlign="center">
          <Icon name="train" circular />
          News on Rails
        </Header>
        <CategoryHeader />
        <AccountHeader/>
        <Switch>
          <Route exact path="/" component={Articles}></Route>
          <Route exact path="/articles/:category" component={Articles}></Route>
          <Route exact path="/subscription" component={Subscription}></Route>
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
