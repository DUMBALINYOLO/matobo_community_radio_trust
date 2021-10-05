import axios from 'axios';
import {
    GET_SERVICES,
    GET_SERVICE,
    GET_PROJECTS,
    ADD_PROJECT,
    GET_IMAGES,
    ADD_IMAGE,
} from '../types/serviceTypes';
import {
    servicesURL,
    imagesURL,
    projectsURL,
} from '../constants';


// Get
export const getServices = () => dispatch => {
    axios.get(servicesURL)
        .then(res => {
            dispatch({
                type: GET_SERVICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//get
export const getService = id => dispatch =>{
      axios.get(`${servicesURL}${id}/`)
        .then(res => {
            dispatch({
                type: GET_SERVICE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getProjects = (id) => dispatch => {
    axios.get(`${projectsURL}?id=${id}`)
        .then(res => {
            dispatch({
                type: GET_PROJECTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getImages = (id) => dispatch => {
    axios.get(`${imagesURL}?id=${id}`)
        .then(res => {
            dispatch({
                type: GET_IMAGES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
