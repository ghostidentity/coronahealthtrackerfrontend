import React, { Component } from "react";
import {
  Button,
  Divider,
  Form,
  Grid,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as user from "../actions/UserActions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {

        let errorOutput;

        return (
            <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Message
                attached
                header="nCov Health Tracker"
                content="You are accessing secure page, authentication is required."
              />
              <Form size="large" error={this.state.error}>
                <Segment attached="top">
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    type="username"
                    name="username"
                    onChange={e => this.onInputChange(e)}
                    error={this.state.usernameNotValid}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={e => this.onInputChange(e)}
                    error={this.state.passwordNotValid}
                  />
        
                  <Divider />
                  <Message error header="" content={errorOutput} />
        
                  <Button
                    color="grey"
                    basic
                    fluid
                    size="large"
                    onClick={e => this.handleSubmit(e)}
                  >
                    Login
                  </Button>
                </Segment>
              </Form>
              <Message attached="bottom" warning size="small">
                No account ? You can <Link to="/register"> register </Link>
              </Message>
            </Grid.Column>
          </Grid>
        );
    }
}

const mapStateToProps = (state, props) => {
    const data = {
        "state": "idle"
    }

    return {
        security: data
    }
}
const mapDispatchToProps = dispatch => {
    return {
        submitUser: (data) => dispatch(user.loginAPI(data))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Login);