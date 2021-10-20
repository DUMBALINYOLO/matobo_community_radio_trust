import axios from 'axios';
import {
    GET_DONATIONS,
    ADD_DONATION,


} from '../types/donationTypes';
import {
    donationsURL

} from '../constants';
import { returnErrors } from './messages';


export const getDonations = () => dispatch => {

    axios.get(donationsURL)
        .then(res => {
            dispatch({
                type: GET_DONATIONS,
                payload: res.data
            });
      }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}


// Add
export const addDonation = (donation) => dispatch => {
    axios.post(donationsURL, donation)
        .then(res => {
            dispatch({
                type: ADD_DONATION,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
