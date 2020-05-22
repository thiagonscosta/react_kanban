import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import BoardPage from './pages/BoardPage';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={SignInPage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/board" exact component={BoardPage} />
        </Switch>
    )
}

export default Routes;