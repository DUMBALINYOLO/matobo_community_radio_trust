import {
    GET_MEMBERSHIPS,

    } from '../types/membershipTypes';

const initialState = {
    memberships: [],

}


export default function memberships(state = initialState, action){
    switch(action.type){

        case GET_MEMBERSHIPS:
            return {
                ...state,
                memberships: action.payload
            };

        default:
            return state;
    }
}
