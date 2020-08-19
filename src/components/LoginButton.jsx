import React from "react";
import { connect } from "react-redux";

const LoginButton = (props) => {
  const clickHandler = () => {
    props.dispatch({
      type: "LOGIN_FORM_VISIBILITY",
      payload: { renderLoginForm: true },
    });
  };

  return <button id={props.id} onClick={clickHandler}>Login</button>;
};

export default connect()(LoginButton);
