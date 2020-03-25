import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import * as user from '../actions/UserActions';
import { connect } from 'react-redux';
import Credentials from './Credentials';

class MainForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            organization: '',
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            city: '',
            country: '',
            username: '',
            password: '',
            phone: ''
        }
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, age, city, country, username, password, organization, phone } = this.state;
        const values = { firstName, lastName, email, age, city, country, username, password, organization, phone };

        switch (step) {
            case 1:
                return <UserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 2:
                return <Credentials
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 3:
                return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                />
            case 4:
                this.props.userRegister({
                    'firstName': this.state.firstName,
                    'lastName': this.state.lastName,
                    'email': this.state.email,
                    'age': this.state.age,
                    'city': this.state.city,
                    'country': this.state.country,
                    'username': this.state.username,
                    'password': this.state.password,
                    'organization': this.state.organization,
                    'phone': this.state.phone
                })
                return <Success />
            default:
                
        }


    }
}

const mapDispatchToProps = dispatch => {
    return {
        userRegister: (data) => dispatch(user.registerAPI(data)),
    }
};
export default connect(null, mapDispatchToProps)(MainForm);