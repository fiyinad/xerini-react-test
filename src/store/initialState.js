import { initialState as appInitialState } from './reducers/app.reducer';
import { initialState as profileInitialState } from './reducers/profile.reducer';

const initialState = {
    ...appInitialState,
    ...profileInitialState
};

export default initialState;