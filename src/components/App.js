import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Mainscreen from './Mainscreen';
import Homepage from './Homepage';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Route path="/" exact={true} component={Homepage} />
                <Route path="/main" component={Mainscreen} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </BrowserRouter>
        );
    }
}

export default App;