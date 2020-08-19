import React from "./node_modules/react";
import { Button, Form, Grid, Segment } from "./node_modules/semantic-ui-react";
import { connect } from "./node_modules/react-redux";
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
      debugger
      props.dispatch({
        type: "FAIL_AUTHENTICATE",
        payload: {
          errorMessage: error.response.data.errors[0],
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
