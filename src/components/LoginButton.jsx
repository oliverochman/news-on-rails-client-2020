import React from 'react'
import { connect } from "react-redux";

const LoginButton = (props) => {

    const clickHandler = () => {
        props.dispatch({
          type: "LOGIN_FORM_VISIBILITY",
          payload: {renderLoginForm: true},
        });
      };

    return (
        <div>
          <button id="login" onClick={clickHandler}>Login</button>
        </div>
    )
}

export default connect()(LoginButton)