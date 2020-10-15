import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Layout from './containers/layout/index';

const browserHistory = createBrowserHistory();

const app = props => {
    return (
        <Router history={browserHistory}>
            <Layout />
        </Router>
    );
}

export default app;