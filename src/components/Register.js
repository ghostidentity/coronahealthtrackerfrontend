import React, { Component } from 'react';
import { Grid, Label, Segment } from 'semantic-ui-react';
import MainForm from './MainForm';

class Register extends Component {

    render() {
        return (
            <React.Fragment> <br /> <br /><br />
                <Grid columns={3}>
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                        <Segment >
                            <Label attached='top'>Registration</Label>
                            <MainForm />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid>
            </React.Fragment>
        )
    }
}

export default Register;