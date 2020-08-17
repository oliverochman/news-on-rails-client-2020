import React from "react";
import { Button, Form, Grid, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import auth from "../modules/auth";

const LoginForm = (props) => {
  const authenticate = async (event) => {
    event.preventDefault();
    try {
      let response = await auth.signIn(
        event.target.email.value,
        event.target.password.value
      );
      props.dispatch({
        type: "AUTHENTICATE",
        payload: {
          currentUser: { email: response.data.email, role: response.data.role },
        },
      });
    } catch (error) {
      props.dispatch({
        type: "FAIL_AUTHENTICATE",
        payload: {
          errorMessage: "Invalid login credentials. Please try again.",
        },
      });
    }
  };

  return (
    <>
      <Segment placeholder>
        <Grid columns={1} relaxed="very" stackable>
          <Grid.Column>
            <Form onSubmit={authenticate} id="login-form">
              <Form.Input
                id="email"
                icon="user"
                iconPosition="left"
                label="Email"
                placeholder="Email"
              />
              <Form.Input
                id="password"
                icon="lock"
                iconPosition="left"
                label="Password"
                placeholder="Password"
                type="password"
              />
              <Button content="Login" id="login-submit" primary />
              <p>{props.errorMessage}</p>
            </Form>
          </Grid.Column>
        </Grid>
      </Segment>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.errorMessage,
  };
};

export default connect(mapStateToProps)(LoginForm);
