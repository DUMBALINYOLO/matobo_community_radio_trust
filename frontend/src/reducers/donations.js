import {
    GET_DONATIONS,

    } from '../types/donationTypes';

const initialState = {
    donations: [],

}


export default function donations(state = initialState, action){
    switch(action.type){

        case GET_DONATIONS:
            return {
                ...state,
                donations: action.payload
            };

        default:
            return state;
    }
}
