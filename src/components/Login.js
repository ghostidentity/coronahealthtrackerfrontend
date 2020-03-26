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
      

        this.state = {
          credentials: {
              username: "",
              password: "",
          },
          usernameNotValid: false,
          passwordNotValid: false,
          invalidCredential: false,
          errors: {
              usernameError: "",
              passwordError: ""
          },
          error: false,
          authenticated: false,
          submitted: true
      }

    }

    handleSubmit = (e) => {
      e.preventDefault();

      const formError = this.validate();

      if (this.state.invalidCredential) {
          this.setState({
              error: true
          });
      }

      if (formError === true) {
          this.setState({
              error: true
          });
          console.log("Errors: " + JSON.stringify(this.state.errors));
      } else {
          this.setState({
              error: false
          }, () =>
                  (
                      this.props.submitUser({ 'credentials': this.state.credentials, }),
                      this.setState({ "submitted": true })
                  )
          );
      }
  }

  validate = () => {
      let isError = false;
      const temp = {};

      let _usernameNotValid = false;
      let _passwordNotValid = false;
      if (this.state.credentials.username.length < 5) {
          isError = true;
          _usernameNotValid = true;
          temp.usernameError = "User name needs to be atleast 5 characters longs";
      }

      if (this.state.credentials.password.length < 5) {
          isError = true;
          _passwordNotValid = true;
          temp.passwordError = "Password needs to be atleast 5 characters longs";
      }

      this.setState({
          usernameNotValid: _usernameNotValid,
          passwordNotValid: _passwordNotValid,
          errors: {
              usernameError: temp.usernameError,
              passwordError: temp.passwordError
          }
      });



      return isError;
  }

  login = (e) => {

  }
  
  onInputChange = (e) => {

      if (this.state.invalidCredential) {
          this.props.clearViolation();

          this.setState({
              invalidCredential: false,
              error: false
          })
      }


      let value = e.target.value
      switch (e.target.name) {
          case "username":
              this.setState((prevState, props) => (
                  {
                      credentials: {
                          username: value,
                          password: prevState.credentials.password
                      }, ...prevState.credentials
                  }))
              break;
          case "password":

              this.setState((prevState, props) => (
                  {
                      credentials: {
                          username: prevState.credentials.username,
                          password: value
                      }, ...prevState.credentials
                  }))
              break;
          default:
              break;
      }



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