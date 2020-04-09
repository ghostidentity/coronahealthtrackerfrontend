import React, { Component } from 'react';
import { Button, List, Divider } from 'semantic-ui-react';

class Confirmation extends Component {
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, age, city, country, username, password, phone, organization } } = this.props;

        return (
            <div>
                <h1 className="ui centered">Confirmation</h1>
                <p>Click Confirm if the following details have been correctly entered</p>
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Organization: {organization}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>First Name: {firstName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Last Name: {lastName}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            Email: <a href='mailto:proxyshahdow@gmail.com'>{email}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='calendar' />
                        <List.Content>Age: {age} years old</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>Address: {city}, {country}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='user' />
                        <List.Content>Username: {username}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='key' />
                        <List.Content>Password: {password}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='phone' />
                        <List.Content>Phone: {phone}</List.Content>
                    </List.Item>
                </List>
                <Divider />
                <Button onClick={this.back}>Back</Button>
                <Button onClick={this.saveAndContinue}>Confirm</Button>
            </div>
        )
    }
}

export default Confirmation;