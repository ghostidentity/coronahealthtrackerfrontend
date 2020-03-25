import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Container, Icon, Label, Dimmer, Loader } from 'semantic-ui-react';

class Success extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            registered: false
        }
    }

    componentDidMount() {
        this.interval = setTimeout(() => {
            this.setState({
                registered: true
            })
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {

        const output = (
            <Dimmer active inverted>
                <Loader>Saving changes..., If your account is approved you will receive an email.</Loader>
            </Dimmer>
        )

        return (
            this.state.registered ? <Redirect to='/' /> : output
        )
    }
}

export default Success;