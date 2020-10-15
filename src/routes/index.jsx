import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../containers/landing/index';
import Profile from '../containers/profile/index';
import EditUser from '../containers/edituser/index';
import ViewUser from '../components/viewuser/index';

const routes = () => {
    return (
        <Switch>
            <Route path="/users/view/:id" exact component={ViewUser} />
            <Route path="/users/:id" exact component={EditUser} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" exact component={Landing} />
        </Switch>
    )
}

export default routes;