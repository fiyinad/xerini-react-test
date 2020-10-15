import { loadStorageItem } from '../../helper';
import * as actionTypes from '../actions';

const initialState = {
    user: loadStorageItem('currentUser') | {},
    users: [
        {
            id: "1",
            first_name: "Jon",
            other_names: "Williams",
            address: {
                street: "1 Mill Street",
                town: "Northampton",
                county: "Northamponshire",
                postcode: "NU7 JK8"
            },
            mobile: "08982 92829",
            email: "jwlll@gmail.com",
            company: "Xerini",
            preferences: { contact: ["mail", "sms"] }
        }
    ]
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.payload.user
            };

        case actionTypes.USER_UPDATED:
            const foundUser = { ...state }.users.find(u => action.payload.id === u.id);
            if (!foundUser) {
                return state;
            }

            const newState = { ...state };
            const foundIndex = newState.users.findIndex(e => e.id === action.payload.id);
            newState.users[foundIndex] = action.payload;

            return {
                ...state,
                users: newState.users
            }
        default:
            return state;
    }
}