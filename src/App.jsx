import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Articles from "./components/Articles";
import CategoryHeader from "./components/CategoryHeader";
import LoginForm from "./components/LoginForm";
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

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
      <CategoryHeader />
      <Switch>
        <Route exact path="/" component={Articles}></Route>
        <Route exact path="/articles/:category" component={Articles}></Route>
      </Switch>
      {props.renderLoginForm && <LoginForm />}
    </>
  );
};
const mapStateToProps = (state) => {
  return { renderLoginForm: state.renderLoginForm };
};

export default connect(mapStateToProps)(App);