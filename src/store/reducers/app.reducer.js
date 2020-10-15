import { loadStorageItem } from '../../helper';
import * as actionTypes from '../actions';

const initialState = { 
    isAuthenticated: loadStorageItem('isAuthenticated') | false 
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_REQUESTED:
            return {
                ...state,
                isAuthenticated: true
            };
        default:
            return state;
    }
}