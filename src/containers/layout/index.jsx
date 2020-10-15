import React from 'react';
import { connect } from 'react-redux';

import Navigation from '../navigation/index';
import Routes from '../../routes/index';
import Login from '../login/index';

const layout = props => {
    return (
        props.isAuthenticated && props.user
        ? <React.Fragment>
            <Navigation /> 
            <Routes />
        </React.Fragment > 
        : <Login/>
    );
}

const mapStateToProps = state => {
    return { 
        isAuthenticated: state.app.isAuthenticated,
        user: state.profile.user
    }
}

export default connect(mapStateToProps)(layout);