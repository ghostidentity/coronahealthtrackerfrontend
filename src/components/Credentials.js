import React, { Component } from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';

class Credentials extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props
        return (
            <Form color='blue' >

                <Form.Field required>
                    <label>Username</label>
                    <input placeholder='Username'
                        onChange={this.props.handleChange('username')}
                        defaultValue={values.username}
                    />
                </Form.Field>
                <Form.Field required>
                    <label>Password</label>
                    <input placeholder='Password'
                        type="password"
                        onChange={this.props.handleChange('password')}
                        defaultValue={values.password}
                    />
                </Form.Field>
                <Form.Field required>
                    <label>Email Address: </label>
                    <input placeholder='Email'
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                    />
                </Form.Field>
                <Divider />
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Next </Button>
            </Form>
        )
    }
}

export default Credentials;