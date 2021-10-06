import {
    GET_PROJECTS,
    GET_IMAGES,
    GET_SERVICE,
    GET_SERVICES,
    GET_PROJECT
} from '../types/serviceTypes';

const initialState = {
    services: [],
    service: {},
    projects: [],
    project: {},
    images: [],
}

export default function services(state = initialState, action){
    switch(action.type){

        case GET_SERVICES:
            return {
                ...state,
                services: action.payload
            };
        case GET_SERVICE:
            return {
                ...state,
                service: action.payload
            };
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            };
        case GET_PROJECT:
            return {
                ...state,
                project: action.payload
            };
        case GET_IMAGES:
            return {
                ...state,
                images: action.payload
            };
        default:
            return state;
    }
}
