import { combineReducers } from 'redux';

import { appReducer } from './app.reducer';
import { profileReducer } from './profile.reducer';

const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer
});

export default rootReducer;