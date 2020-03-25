import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Mainscreen from './Mainscreen';


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact={true} component={Mainscreen} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </BrowserRouter>
        );
    }
}

export default App;