import React, { Component } from 'react';
import { Button, Divider, Form, Menu, Dropdown } from 'semantic-ui-react';

const options = [
    { key: 1, text: 'Male', value: 1 },
    { key: 2, text: 'Female', value: 2 }
]
class UserDetails extends Component {

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values } = this.props;
        return (
            <Form >

                <Form.Field required>
                    <label>Organization</label>
                    <input
                        placeholder='Organization'
                        onChange={this.props.handleChange('organization')}
                        defaultValue={values.organization}
                    />
                </Form.Field>
                <Form.Field required>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        onChange={this.props.handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                </Form.Field>
                <Form.Field required>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        onChange={this.props.handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                </Form.Field>

                <Form.Group>
                    <Form.Field>
                        <label>Age</label>
                        <input placeholder='Age'
                            onChange={this.props.handleChange('age')}
                            defaultValue={values.age}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label>Gender</label>
                        <Dropdown
                            placeholder='Male'
                            selection
                            options={options}
                        />
                    </Form.Field>
                </Form.Group>
                <Divider />
                <Form.Field required>
                    <label>Phone</label>
                    <input placeholder='Phone'
                        onChange={this.props.handleChange('phone')}
                        defaultValue={values.phone}
                    />
                </Form.Field>
                <Form.Field required>
                    <label>Country</label>
                    <input placeholder='Country'
                        onChange={this.props.handleChange('country')}
                        defaultValue={values.country}
                    />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input placeholder='City'
                        onChange={this.props.handleChange('city')}
                        defaultValue={values.city}
                    />
                </Form.Field>


                <Divider />
                <Button onClick={this.saveAndContinue}>Next </Button>
            </Form>

        )
    }
}

export default UserDetails;