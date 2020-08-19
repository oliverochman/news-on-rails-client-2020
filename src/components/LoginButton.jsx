import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { Button } from "semantic-ui-react"

const LoginButton = (props) => {
  const { t } = useTranslation();
  const clickHandler = () => {
    props.dispatch({
      type: "LOGIN_FORM_VISIBILITY",
      payload: { renderLoginForm: true },
    });
  };

  return <Button id={props.id} onClick={clickHandler}>{t("login-button")}</Button>;
};

export default connect()(LoginButton);
