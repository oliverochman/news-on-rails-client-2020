import React from "./node_modules/react";
import { connect } from "./node_modules/react-redux";

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
